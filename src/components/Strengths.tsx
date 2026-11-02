import { STRENGTHS } from "@/data/content";
import { Fingerprint, Sparkles, Clapperboard, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
import MagnetLines from "./MagnetLines";

const ICONS: Record<string, typeof Fingerprint> = {
  Fingerprint,
  Sparkles,
  Clapperboard,
  Layers
};

function StrengthCard({
  item,
  i
}: {
  item: (typeof STRENGTHS)[number];
  i: number;
}) {
  const Icon = ICONS[item.icon];

  return (
    <div className="group relative flex flex-col border border-white/[0.08] bg-ink-800 p-10 transition-colors duration-500 hover:border-volt/40 hover:bg-ink-700">
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center border border-white/10 text-volt transition-colors duration-300 group-hover:border-volt/50">
          <Icon size={22} strokeWidth={1.5} />
        </span>
        <span className="font-mono text-xs text-fog-600">0{i + 1}</span>
      </div>
      <h3 className="mt-8 text-xl font-medium text-fog-100">{item.title}</h3>
      <p className="mt-4 flex-1 text-[13px] leading-relaxed text-fog-500">
        {item.desc}
      </p>
      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.06] pt-5">
        {item.keywords.map((k) => (
          <span
            key={k}
            className="font-mono text-[10px] tracking-[0.2em] text-fog-600 transition-colors duration-300 group-hover:text-fog-300"
          >
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Strengths() {
  return (
    <section id="strengths" className="relative overflow-hidden py-32">
      {/* 背景：磁力线场动效 */}
      <div className="pointer-events-none absolute inset-0">
        <MagnetLines
          spacing={46}
          lineColor="#5E5E6B"
          accentColor="#C8FF4A"
          lineWidth={2}
          lineHeight={15}
          baseAngle={-10}
          mode="orbit"
          shape="line"
          radius={300}
          fade={0.72}
          edgeFade={0.45}
          stretch={0.55}
          inertia={0.42}
          bounce={0.25}
          ripple={0.35}
          clickPulse
          intro
          idle
          maxDevicePixelRatio={2}
        />
        {/* 上下柔化，与相邻模块自然衔接 */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-900 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-900 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-shell px-10">
        <SectionHeading index="03" label="CAPABILITIES" title="个人优势" />
        <div className="mt-16 grid grid-cols-4 gap-6">
          {STRENGTHS.map((item, i) => (
            <StrengthCard key={item.title} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
