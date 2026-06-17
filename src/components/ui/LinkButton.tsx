import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export function LinkButton({ href, children, external = false, className }: LinkButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight size={15} aria-hidden />
    </>
  );

  const classes = cn(
    "inline-flex h-9 items-center gap-1.5 border-b border-[color:var(--color-rule-storm-strong)] text-sm font-medium text-[color:var(--color-ink)] transition-colors duration-[var(--dur-fast)] hover:border-[color:var(--color-graphite)] hover:text-[color:var(--color-graphite)]",
    className,
  );

  return (
    <a className={classes} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {content}
    </a>
  );
}
