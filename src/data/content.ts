export const NAV_LINKS = [
  { label: "首页", href: "#home" },
  { label: "关于", href: "#about" },
  { label: "项目", href: "#work" },
  { label: "优势", href: "#strengths" },
  { label: "联系", href: "#contact" },
];

export const IDENTITY = ["视觉设计师", "AI 设计师", "品牌设计师"];

export const CONTACT = {
  phone: "131 8245 9152",
  email: "3403819496@qq.com",
  wechat: "1145141919810",
  location: "广东 · 珠海",
};

export const EDUCATION = {
  school: "珠海高级技师学院",
  major: "艺术设计 · 影视方向",
  period: "2023.9 — 2027.7",
  note: "平面构成、色彩构成、广告设计、品牌 VI 设计、包装设计、数字影像制作等。",
};

export const STATS = [
  { value: "20+", label: "视觉设计项目" },
  { value: "6+", label: "AI 生成项目" },
  { value: "3", label: "年设计实践" },
  { value: "6", label: "核心设计工具" },
];

export const INTRO =
  "我是罗景彬，一名活跃在视觉设计与 AI 生成领域的年轻设计师。专注于品牌视觉系统、AI 辅助创作与动态影像，擅长将系统的设计方法与前沿的 AI 工具链结合，产出克制而有力量的视觉语言。目前就读于珠海高级技师学院艺术设计（影视方向）专业。";

export const SOFTWARE = [
  "Photoshop",
  "Illustrator",
  "Premiere Pro",
  "After Effects",
  "Cinema 4D",
  "Office",
];

export type Project = {
  index: string;
  title: string;
  category: string;
  year: string;
  tags: string[];
  desc: string;
  gradient: string;
  /** 作品图路径（放入 public/work/ 下） */
  image?: string;
  /** contain：Logo 类图片居中完整展示（奶白底板） */
  fit?: "cover" | "contain";
  /** 点击卡片直达的链接（如 PDF 作品集在线预览） */
  href?: string;
  /** 原始文件下载地址 */
  download?: string;
};

/** 资源统一加 BASE_URL 前缀，保证部署在根路径或子路径（GitHub Pages）下都能解析 */
const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "品牌视觉识别系统",
    category: "BRAND IDENTITY",
    year: "2025",
    tags: ["VI 设计", "Logo", "品牌规范"],
    desc: "从标志到应用规范的完整品牌视觉体系，构建统一克制的品牌语言。",
    gradient:
      "radial-gradient(120% 120% at 20% 10%, #2b2f1a 0%, #12140c 45%, #0a0a0c 100%)",
    image: asset("/work/01.jpg"),
    fit: "contain",
    href: asset("/work/rabbit-farm-brand.pdf"),
    download: asset("/work/rabbit-farm-brand.pptx"),
  },
  {
    index: "02",
    title: "AI 概念视觉实验",
    category: "AI GENERATED",
    year: "2025",
    tags: ["Midjourney", "Stable Diffusion", "概念设计"],
    desc: "以生成式 AI 为核心工具的视觉实验，探索人机共创的美学边界。",
    gradient:
      "radial-gradient(120% 120% at 80% 15%, #1a2233 0%, #0d1220 45%, #0a0a0c 100%)",
  },
  {
    index: "03",
    title: "动态影像与包装",
    category: "MOTION & PACKAGE",
    year: "2024",
    tags: ["After Effects", "C4D", "包装设计"],
    desc: "融合动态图形与产品包装的视觉叙事，让品牌在空间与时间中延展。",
    gradient:
      "radial-gradient(120% 120% at 30% 85%, #2e1f33 0%, #150f1c 45%, #0a0a0c 100%)",
    image: asset("/work/03.jpg"),
    href: asset("/work/motion-video.mp4"),
  },
  {
    index: "04",
    title: "新媒体视觉设计",
    category: "NEW MEDIA",
    year: "2024",
    tags: ["版式设计", "海报", "社媒视觉"],
    desc: "面向新媒体场景的系列视觉输出，兼顾传播效率与视觉品质。",
    gradient:
      "radial-gradient(120% 120% at 75% 80%, #10302e 0%, #0a1615 45%, #0a0a0c 100%)",
    image: asset("/work/04.jpg"),
    href: asset("/work/newmedia-video.mp4"),
  },
];

export const STRENGTHS = [
  {
    icon: "Fingerprint",
    title: "品牌视觉系统",
    desc: "掌握品牌 VI 设计的完整方法论，从标志、色彩到规范落地，构建统一而有记忆点的品牌资产。",
    keywords: ["VI 设计", "品牌规范", "版式系统"],
  },
  {
    icon: "Sparkles",
    title: "AI 生成式设计",
    desc: "熟练运用 Midjourney、Stable Diffusion 等 AI 工具链，将提示词工程与设计判断力结合，快速产出高质量概念视觉。",
    keywords: ["Midjourney", "SD", "提示词工程"],
  },
  {
    icon: "Clapperboard",
    title: "动态与影像",
    desc: "具备影视方向的数字影像制作能力，使用 AE / PR / C4D 完成动态图形、视频剪辑与三维视觉表达。",
    keywords: ["After Effects", "Cinema 4D", "视频剪辑"],
  },
  {
    icon: "Layers",
    title: "平面与软件功底",
    desc: "平面构成与色彩构成训练扎实，熟练操作 PS / AI 等主流设计软件，具备高效的跨软件工作流。",
    keywords: ["Photoshop", "Illustrator", "平面构成"],
  },
];
