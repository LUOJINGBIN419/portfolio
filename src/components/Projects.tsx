import SectionHeading from "./SectionHeading";
import { PROJECTS } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({
  project,
  large
}: {
  project: (typeof PROJECTS)[number];
  large?: boolean;
}) {
  return (
    <a
      href={project.href ?? "#contact"}
      {...(project.href
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className={`group relative block overflow-hidden border border-white/[0.08] bg-ink-800 transition-colors duration-500 hover:border-volt/35 ${
        large ? "col-span-7" : "col-span-5"
      }`}
      style={{ background: project.gradient }}
    >
      {/* 视觉区域 */}
      <div
        className={`relative overflow-hidden ${
          large ? "aspect-[16/10]" : "aspect-[4/3.4]"
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* 作品图：project.image 指定路径，否则回退 public/work/{index}.png */}
          {(() => {
            const contain = project.fit === "contain";
            return (
              <img
                src={project.image ?? `/work/${project.index}.png`}
                alt={project.title}
                className={`absolute inset-0 h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] ${
                  contain ? "bg-[#F4F4F1] object-contain" : "object-cover"
                }`}
                onError={(e) => {
                  (e.target as HTMLImageElement).remove();
                }}
              />
            );
          })()}
        </div>
        {/* 占位视觉：大序号 + 网格 */}
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[120px] font-bold leading-none text-white/[0.07] transition-colors duration-700 group-hover:text-volt/10">
            {project.index}
          </span>
        </div>
        <div className="absolute left-6 top-6 font-mono text-[11px] tracking-[0.3em] text-fog-500">
          {project.category}
        </div>
        <div className="absolute right-6 top-6 font-mono text-[11px] tracking-[0.2em] text-fog-500">
          {project.year}
        </div>
        {project.href && (
          <div className="absolute bottom-6 left-6 flex items-center gap-2.5 font-mono text-[10px] tracking-[0.3em] text-fog-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="h-1.5 w-1.5 rounded-full bg-volt" />
            VIEW PROJECT ↗
          </div>
        )}
      </div>

      {/* 信息区 */}
      <div className="border-t border-white/[0.08] bg-ink-900/60 p-7 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-medium text-fog-100">{project.title}</h3>
          <span className="flex h-10 w-10 items-center justify-center border border-white/10 text-fog-500 transition-all duration-300 group-hover:border-volt group-hover:bg-volt group-hover:text-ink-900">
            <ArrowUpRight size={17} />
          </span>
        </div>
        <p className="mt-3 max-w-[520px] text-[13px] leading-relaxed text-fog-500">
          {project.desc}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] tracking-[0.15em] text-fog-600"
            >
              # {t}
            </span>
          ))}
        </div>
        {project.download && (
          <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
            <span className="font-mono text-[10px] tracking-[0.25em] text-fog-500">
              完整作品集 · 春分市集视觉设计
            </span>
            <span
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.download, "_blank");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.download, "_blank");
                }
              }}
              className="cursor-pointer border border-white/10 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-fog-400 transition-colors duration-300 hover:border-volt/50 hover:text-volt"
            >
              下载 PPTX ↓
            </span>
          </div>
        )}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative bg-ink-850 py-32">
      <div className="mx-auto max-w-shell px-10">
        <SectionHeading index="02" label="SELECTED WORK" title="精选项目" />
        <div className="mt-16 grid grid-cols-12 gap-6">
          <ProjectCard project={PROJECTS[0]} large />
          <ProjectCard project={PROJECTS[1]} />
          <ProjectCard project={PROJECTS[2]} />
          <ProjectCard project={PROJECTS[3]} large />
        </div>
      </div>
    </section>
  );
}
