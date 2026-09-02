type SectionLabelProps = {
  index: string;
  label: string;
};

export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-muted uppercase">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-border" />
      <span>{label}</span>
    </div>
  );
}
