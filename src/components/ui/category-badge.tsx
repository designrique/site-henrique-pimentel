export function CategoryBadge({ name, tone }: { name: string; tone?: "vertical" }) {
  const isMedico = tone === "vertical";
  const base = "inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ";
  const color = isMedico
    ? "bg-[color:var(--vertical-medico-subtle-bg)] text-[color:var(--vertical-medico-text)]"
    : "bg-[color:var(--accent-subtle-bg)] text-[color:var(--accent-text)]";
  return <span className={base + color}>{name}</span>;
}