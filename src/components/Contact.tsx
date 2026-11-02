import { CONTACT, IDENTITY } from "@/data/content";
import { Mail, Phone, MessageCircle, ArrowUpRight, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="noise relative flex min-h-screen flex-col justify-between overflow-hidden border-t border-white/[0.06] bg-ink-950"
    >
      {/* 背景氛围 */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="aurora-blob left-[15%] top-[20%] h-[50vh] w-[40vw] bg-[#1c2a14] opacity-50"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="aurora-blob bottom-[-10%] right-[-5%] h-[45vh] w-[35vw] bg-[#101c30] opacity-50"
          style={{ animationDelay: "-10s" }}
        />
        <div className="bg-grid absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-shell flex-1 flex-col justify-center px-10 py-28">
        <div className="flex items-center gap-4 font-mono text-xs tracking-[0.35em] text-volt">
          <span>04</span>
          <span className="h-px w-10 bg-volt/50" />
          <span className="text-fog-600">CONTACT</span>
        </div>

        <h2 className="mt-10 text-[clamp(56px,7vw,120px)] font-black leading-[1.05] tracking-tight">
          一起做点
          <span className="text-volt">有意思的</span>
          <br />
          <span className="text-stroke">LET'S CREATE</span>
        </h2>

        <p className="mt-10 max-w-[520px] text-[15px] leading-relaxed text-fog-500">
          如果你正在寻找一名兼具品牌思维与 AI 工具链能力的视觉设计师，
          欢迎随时与我联系 —— 简历、作品源文件与更多案例可按需提供。
        </p>

        {/* 联系入口 */}
        <div className="mt-16 grid max-w-[1100px] grid-cols-3 gap-6">
          {[
            {
              icon: Mail,
              label: "EMAIL",
              value: CONTACT.email,
              href: `mailto:${CONTACT.email}`
            },
            {
              icon: Phone,
              label: "PHONE",
              value: CONTACT.phone,
              href: `tel:${CONTACT.phone.replace(/\s/g, "")}`
            },
            {
              icon: MessageCircle,
              label: "WECHAT",
              value: CONTACT.wechat,
              href: "#contact"
            }
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center justify-between border border-white/[0.08] bg-ink-900/50 p-7 backdrop-blur-sm transition-all duration-300 hover:border-volt/50 hover:bg-ink-800"
            >
              <div className="flex items-center gap-5">
                <Icon size={20} strokeWidth={1.5} className="text-volt" />
                <div>
                  <div className="font-mono text-[10px] tracking-[0.3em] text-fog-600">
                    {label}
                  </div>
                  <div className="mt-1.5 text-sm text-fog-100">{value}</div>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-fog-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-volt"
              />
            </a>
          ))}
        </div>
      </div>

      {/* 页脚 */}
      <footer className="relative z-10 mx-auto w-full max-w-shell px-10 pb-10">
        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-white/[0.08]" />
          <div className="flex items-end justify-between pt-6">
            <div className="flex items-center gap-8">
              <span className="font-mono text-xs tracking-[0.25em] text-fog-100">
                LUO JINGBIN
              </span>
              <span className="font-mono text-[11px] tracking-[0.2em] text-fog-600">
                {IDENTITY.join(" / ")}
              </span>
            </div>
            <div className="flex items-center gap-8 font-mono text-[11px] tracking-[0.2em] text-fog-600">
              <span className="flex items-center gap-2">
                <MapPin size={12} />
                {CONTACT.location}
              </span>
              <span>© 2026 PORTFOLIO</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
