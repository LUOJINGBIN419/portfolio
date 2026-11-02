import {
  CONTACT,
  EDUCATION,
  INTRO,
  SOFTWARE,
  STATS
} from "@/data/content";
import {
  GraduationCap,
  Mail,
  Phone,
  MessageCircle,
  MapPin
} from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-shell px-10">
        <SectionHeading index="01" label="ABOUT" title="个人经历" />

        <div className="mt-16 grid grid-cols-12 gap-10">
          {/* 左侧：人物图 + 基本信息 */}
          <div className="col-span-4">
            <div className="group relative aspect-[3/4] overflow-hidden border border-white/[0.08] bg-ink-800">
              {/* 头像占位：将图片命名为 public/avatar.png 即可自动替换 */}
              <img
                src="/avatar.png"
                alt="罗景彬"
                className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* 占位样式（无图片时显示） */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-ink-700 to-ink-850">
                <span className="font-mono text-7xl font-bold tracking-tighter text-fog-100/15">
                  LJ
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-fog-600">
                  PORTRAIT / avatar.png
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-ink-900/90 to-transparent px-6 pb-5 pt-16 font-mono text-[11px] tracking-[0.25em] text-fog-300">
                <span>罗景彬</span>
                <span className="text-volt">2008.4</span>
              </div>
            </div>
          </div>

          {/* 右侧：介绍 / 数据 / 经历 / 联系 */}
          <div className="col-span-8 flex flex-col">
            <p className="max-w-[720px] text-2xl font-light leading-[1.7] text-fog-100">
              {INTRO}
            </p>

            {/* 项目数据 */}
            <div className="mt-12 grid grid-cols-4 border-y border-white/[0.08]">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`py-8 ${i > 0 ? "border-l border-white/[0.08] pl-8" : ""}`}
                >
                  <div className="font-mono text-4xl font-bold tabular-nums text-volt">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[13px] text-fog-500">{s.label}</div>
                </div>
              ))}
            </div>

            {/* 教育背景 + 联系方式 两栏 */}
            <div className="mt-12 grid grid-cols-2 gap-10">
              <div>
                <div className="flex items-center gap-3 text-[13px] tracking-[0.25em] text-fog-600">
                  <GraduationCap size={16} className="text-volt" />
                  教育背景
                </div>
                <div className="mt-5 space-y-1.5">
                  <div className="text-lg font-medium text-fog-100">
                    {EDUCATION.school}
                  </div>
                  <div className="text-sm text-fog-500">{EDUCATION.major}</div>
                  <div className="font-mono text-xs tracking-[0.2em] text-fog-600">
                    {EDUCATION.period}
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-fog-500">
                    {EDUCATION.note}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {SOFTWARE.map((s) => (
                    <span
                      key={s}
                      className="border border-white/10 px-3 py-1.5 font-mono text-[11px] text-fog-300 transition-colors duration-300 hover:border-volt/50 hover:text-volt"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 text-[13px] tracking-[0.25em] text-fog-600">
                  <MapPin size={16} className="text-volt" />
                  联系方式
                </div>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-center gap-4 text-fog-300">
                    <Phone size={15} className="text-fog-600" />
                    {CONTACT.phone}
                  </li>
                  <li className="flex items-center gap-4 text-fog-300">
                    <Mail size={15} className="text-fog-600" />
                    {CONTACT.email}
                  </li>
                  <li className="flex items-center gap-4 text-fog-300">
                    <MessageCircle size={15} className="text-fog-600" />
                    微信 {CONTACT.wechat}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
