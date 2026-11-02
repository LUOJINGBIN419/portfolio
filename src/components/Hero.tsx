import { useState } from "react";
import { IDENTITY, CONTACT } from "@/data/content";
import { ArrowDown, Play } from "lucide-react";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section
      id="home"
      className="noise relative flex h-screen min-h-[720px] flex-col overflow-hidden"
    >
      {/* 背景层：极光兜底 + 视频置顶（视频加载失败自动隐藏） */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-ink-900">
            <div
              className="aurora-blob left-[-8%] top-[-15%] h-[60vh] w-[46vw] bg-[#1c2a14] opacity-70"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="aurora-blob right-[-10%] top-[5%] h-[55vh] w-[38vw] bg-[#101c30] opacity-70"
              style={{ animationDelay: "-6s" }}
            />
            <div
              className="aurora-blob bottom-[-20%] left-[30%] h-[50vh] w-[40vw] bg-[#1a1424] opacity-60"
              style={{ animationDelay: "-12s" }}
            />
          </div>
          {/* 视频背景：将视频文件放入 public/hero-bg.mp4 即自动播放 */}
          {!videoFailed && (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/hero-bg.mp4"
              autoPlay
              muted
              loop
              playsInline
              onError={() => setVideoFailed(true)}
            />
          )}
        </div>
        <div className="bg-grid absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-transparent to-ink-900" />
      </div>

      {/* 中央大标题 */}
      <div className="relative z-10 mx-auto flex w-full max-w-shell flex-1 flex-col justify-center px-10">
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-volt" />
          <span className="font-mono text-xs tracking-[0.35em] text-volt">
            PORTFOLIO 2026
          </span>
        </div>

        <h1 className="max-w-[1200px] text-[clamp(64px,8.5vw,150px)] font-black leading-[1.02] tracking-tight">
          罗景彬
          <span className="ml-6 inline-block align-top font-mono text-[0.34em] font-bold tracking-[0.3em]">
            <span className="text-stroke">LUO JINGBIN</span>
          </span>
        </h1>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-lg text-fog-300">
          {IDENTITY.map((role, i) => (
            <span key={role} className="flex items-center gap-8">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-volt" />}
              {role}
            </span>
          ))}
        </div>

        <p className="mt-8 max-w-[560px] text-[15px] leading-relaxed text-fog-500">
          在品牌、视觉与 AI 的交界处工作 —— 用克制的视觉语言，把想法变成可以被记住的东西。
        </p>

        <div className="mt-14 flex items-center gap-6">
          <a
            href="#work"
            className="group flex items-center gap-3 bg-volt px-8 py-4 text-sm font-medium tracking-[0.15em] text-ink-900 transition-colors duration-300 hover:bg-fog-100"
          >
            查看精选项目
            <ArrowDown
              size={16}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
          <a
            href="#about"
            className="group flex items-center gap-3 px-2 py-4 text-sm tracking-[0.15em] text-fog-300 transition-colors duration-300 hover:text-fog-100"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-volt group-hover:text-volt">
              <Play size={14} className="ml-0.5" />
            </span>
            了解我
          </a>
        </div>
      </div>

      {/* 底部信息条 */}
      <div className="relative z-10 mx-auto w-full max-w-shell px-10 pb-10">
        <div className="relative font-mono text-[11px] tracking-[0.25em] text-fog-600">
          <div className="absolute inset-x-0 top-0 h-px bg-white/[0.09]" />
          <div className="flex items-end justify-between pt-6">
            <span>{CONTACT.location}</span>
            <span className="hidden md:block">VISUAL / AI / BRAND</span>
            <span className="animate-pulse text-volt">● AVAILABLE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
