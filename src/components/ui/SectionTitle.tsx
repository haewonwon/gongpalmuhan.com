type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10 border-b border-(--color-rule-storm) pb-7">
      {eyebrow ? <p className="mb-3 text-(length:--text-caption) font-medium text-(--color-graphite)">{eyebrow}</p> : null}
      <h1 className="max-w-3xl text-(length:--text-title) font-semibold leading-tight tracking-normal text-(--color-ink)">{title}</h1>
      {description ? <p className="mt-4 max-w-2xl text-(length:--text-lede) leading-8 text-(--color-muted-ink)">{description}</p> : null}
    </div>
  );
}
