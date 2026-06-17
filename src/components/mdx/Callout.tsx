import { Info } from "lucide-react";

type CalloutProps = {
  children: React.ReactNode;
};

export function Callout({ children }: CalloutProps) {
  return (
    <aside className="my-7 flex gap-3 border-l-2 border-(--color-graphite) bg-(--color-paper-mark) py-3 pl-4 pr-3 text-sm leading-7 text-(--color-ink)">
      <Info className="mt-1 shrink-0 text-(--color-graphite)" size={17} aria-hidden />
      <div>{children}</div>
    </aside>
  );
}
