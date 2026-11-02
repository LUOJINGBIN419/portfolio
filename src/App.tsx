import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Strengths from "./components/Strengths";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="min-w-[1280px] bg-ink-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Strengths />
      <Contact />
    </main>
  );
}
