"use client";

import { usePathname } from "next/navigation";
import { AutoBreadcrumb } from "@/components/breadcrumb-jsonld";

/** Client wrapper — layout.tsx is a server component */
export function BreadcrumbInjector() {
  return <AutoBreadcrumb pathname={usePathname()} />;
}
