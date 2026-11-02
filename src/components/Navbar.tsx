import { useEffect, useState } from "react";
import { NAV_LINKS, CONTACT } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  // 滑过第一屏（Hero）后切换为悬浮磨砂玻璃状态
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.85;
      setFloating(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div
        className={`pointer-events-auto transition-all duration-500 ease-out ${
          floating ? "px-10 pt-4" : "px-0 pt-0"
        }`}
      >
        <div
          className={`mx-auto flex max-w-shell items-center justify-between transition-all duration-500 ease-out ${
            floating
              ? "h-[68px] rounded-full border border-white/[0.10] bg-ink-900/60 px-8 shadow-[0_16px_50px_-18px_rgba(0,0,0,0.9)] backdrop-blur-xl backdrop-saturate-150"
              : "h-[76px] border-b border-transparent bg-transparent px-10"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-white/15 font-mono text-sm font-bold tracking-tighter transition-colors duration-300 group-hover:border-volt group-hover:text-volt">
              LJ
            </span>
            <span className="text-sm font-medium tracking-[0.18em] text-fog-300">
              LUO JINGBIN
            </span>
          </a>

          {/* 导航 */}
          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[13px] tracking-[0.2em] text-fog-500 transition-colors duration-300 hover:text-fog-100"
              >
                <span className="mr-1.5 font-mono text-[10px] text-volt/70">
                  0{i + 1}
                </span>
                {link.label}
              </a>
            ))}
          </nav>

          {/* 联系按钮 */}
          <a
            href={`mailto:${CONTACT.email}`}
            className={`group flex items-center gap-2 text-[13px] tracking-[0.15em] text-fog-100 transition-all duration-300 hover:border-volt hover:bg-volt hover:text-ink-900 ${
              floating
                ? "rounded-full border border-white/15 px-5 py-2"
                : "border border-white/15 px-5 py-2.5"
            }`}
          >
            联系我
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
