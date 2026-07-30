"use server";

import { redirect } from "next/navigation";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export interface OnboardingState {
  error?: string;
}

function slugify(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}

export async function createOrganization(
  _prev: OnboardingState,
  formData: FormData,
): Promise<OnboardingState> {
  if (!isSupabaseConfigured()) {
    return { error: "Supabase não configurado neste ambiente." };
  }

  const name = String(formData.get("name") ?? "").trim();
  if (name.length < 2) return { error: "Informe o nome da organização." };

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // Slug único: base + sufixo curto derivado do id do usuário se colidir.
  const base = slugify(name) || "org";
  const suffix = user.id.replace(/-/g, "").slice(0, 6);

  let { error } = await supabase.rpc("create_organization", {
    p_name: name,
    p_slug: base,
  });
  if (error && /duplicate|unique/i.test(error.message)) {
    ({ error } = await supabase.rpc("create_organization", {
      p_name: name,
      p_slug: `${base}-${suffix}`,
    }));
  }
  if (error) return { error: error.message };

  redirect("/atendimento");
}
