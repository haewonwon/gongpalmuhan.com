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
    "inline-flex h-9 items-center gap-1.5 border-b border-(--color-rule-storm-strong) text-sm font-medium text-(--color-ink) transition-colors duration-(--dur-fast) hover:border-(--color-graphite) hover:text-(--color-graphite)",
    className,
  );

  return (
    <a className={classes} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {content}
    </a>
  );
}
