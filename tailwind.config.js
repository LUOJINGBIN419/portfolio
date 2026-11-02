/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08080A",
          900: "#0A0A0C",
          850: "#0E0E11",
          800: "#121216",
          700: "#1A1A20",
          600: "#24242C",
        },
        fog: {
          100: "#F4F4F1",
          300: "#C9C9CE",
          500: "#8B8B95",
          600: "#5C5C66",
        },
        volt: {
          DEFAULT: "#C8FF4A",
          dim: "#9CD62E",
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans SC"',
          '"PingFang SC"',
          '"Microsoft YaHei"',
          "system-ui",
          "sans-serif",
        ],
        mono: ['"JetBrains Mono"', '"SF Mono"', "Consolas", "monospace"],
      },
      maxWidth: {
        shell: "1700px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
