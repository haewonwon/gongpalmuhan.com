import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border-b border-(--color-rule-rain) px-0.5 py-0.5 text-xs font-medium text-(--color-muted-ink)",
        className,
      )}
    >
      {children}
    </span>
  );
}
