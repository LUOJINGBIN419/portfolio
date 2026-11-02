export default function SectionHeading({
  index,
  label,
  title
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <div className="relative">
      <div className="flex items-end justify-between gap-10">
        <h2 className="max-w-full text-[clamp(52px,7vw,124px)] font-black uppercase leading-[0.84] tracking-[-0.045em] text-fog-100">
          {label}
        </h2>
        <span className="mb-2 hidden shrink-0 font-mono text-[11px] tracking-[0.25em] text-fog-600 xl:block">
          LUO JINGBIN — PORTFOLIO
        </span>
      </div>

      <div className="relative mt-8 flex items-end justify-between gap-10 pb-6">
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.08]" />
        <div className="flex items-center gap-5">
          <span className="font-mono text-[11px] tracking-[0.35em] text-volt">
            {index}
          </span>
          <span className="h-px w-10 bg-volt/50" />
          <h3 className="text-2xl font-medium tracking-wide text-fog-300">
            {title}
          </h3>
        </div>
        <span className="font-mono text-[11px] tracking-[0.25em] text-fog-600">
          {index} / 04
        </span>
      </div>
    </div>
  );
}
