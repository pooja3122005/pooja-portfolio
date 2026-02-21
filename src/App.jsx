import { useState, useEffect, useRef } from "react";

// ── Scroll reveal hook ──────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── Reveal wrapper ──────────────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ── Data ────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    num: "01",
    emoji: "🧠",
    title: "AI Bloom's Taxonomy Analyzer",
    desc: "AI-powered academic automation using LLaMA 3 to generate, classify, and balance university question papers by cognitive difficulty — mapped to Course Outcomes.",
    tags: ["LLaMA 3", "Ollama", "Python", "AI/ML"],
    link: "https://github.com/pooja3122005",
  },
  {
    num: "02",
    emoji: "🌍",
    title: "Multilingual College Chatbot",
    desc: "Hackathon-winning chatbot supporting multiple languages to answer queries on scholarships, academics, and policies — with Telegram & WhatsApp escalation.",
    tags: ["NLP", "Telegram API", "n8n", "Pinecone"],
    link: "https://github.com/pooja3122005",
  },
  {
    num: "03",
    emoji: "🚗",
    title: "Arduino Smart Car",
    desc: "Embedded systems project featuring intelligent sensor integration, obstacle detection, and autonomous movement via microcontroller programming.",
    tags: ["Arduino", "C/C++", "Sensors", "Embedded"],
    link: "https://github.com/pooja3122005",
  },
  {
    num: "04",
    emoji: "🛒",
    title: "E-commerce Platform",
    desc: "Multiple production-grade e-commerce sites with React, Firebase auth, real-time DB, and a strong focus on responsive UI/UX excellence.",
    tags: ["React.js", "Firebase", "Tailwind", "JavaScript"],
    link: "https://github.com/pooja3122005",
  },
];

const SKILLS = [
  {
    icon: "☕", label: "Languages", items: [
      { name: "Java (Core + OOP)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" }
    ]
  },
  {
    icon: "🌐", label: "Frontend", items: [
      { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "HTML5 / CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
    ]
  },
  {
    icon: "🗄️", label: "Databases", items: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
      { name: "Pinecone", logo: "🌲" }
    ]
  },
  {
    icon: "⚙️", label: "Tools", items: [
      { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { name: "n8n", logo: "⚙️" },
      { name: "IntelliJ IDEA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
      { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Cloudinary", logo: "☁️" }
    ]
  },
  {
    icon: "💡", label: "Concepts", items: [
      { name: "OOP", logo: "🧩" },
      { name: "DSA", logo: "📊" },
      { name: "Cloud (IaaS/PaaS/SaaS)", logo: "☁️" },
      { name: "REST APIs", logo: "🔗" }
    ]
  },
  {
    icon: "🤖", label: "AI / Automation", items: [
      { name: "LLaMA 3 / Ollama", logo: "🦙" },
      { name: "GenAI", logo: "✨" },
      { name: "Low-code automation", logo: "⚡" },
      { name: "Chatbot Dev", logo: "💬" }
    ]
  },
];

const INTERNSHIPS = [
  {
    company: "Tek Pyramid",
    role: "Web Application Development Intern",
    year: "2025",
    type: "Frontend + Firebase",
    desc: "Built production features with React and integrated Firebase for authentication, real-time database, and cloud storage.",
  },
  {
    company: "CodTech",
    role: "Cloud Computing Intern",
    year: "2025",
    type: "Cloud Fundamentals",
    desc: "Hands-on with IaaS, PaaS, SaaS deployment models, cloud architecture, and industry-standard cloud tools.",
  },
  {
    company: "Elewayte",
    role: "Java Programming with OOPs",
    year: "2024",
    type: "Training Programme",
    desc: "Deep-dived into core Java, design patterns, and object-oriented application development. Earned formal certification.",
  },
];

const EDUCATION = [
  {
    degree: "B.Tech, Information Technology",
    school: "Panimalar Engineering College, Chennai",
    period: "Sep 2023 – Present",
    icon: "🎓",
    type: "Undergraduate",
    detail: "Currently pursuing Bachelor of Technology in Information Technology, building expertise in Java, AI systems, web development, and cloud computing.",
  },
  {
    degree: "Higher Secondary Education",
    school: "Infant Jesus Matric Hr. Sec. School, Kanchipuram",
    period: "Jun 2022 – Mar 2023",
    icon: "📚",
    type: "HSC · 84.3%",
    detail: "Completed Higher Secondary Education with a strong academic record of 84.3%, building a solid foundation for engineering studies.",
  },
];

const ACHIEVEMENTS = [
  {
    medal: "🥈",
    place: "First Runner-Up",
    event: "G-Hacks · GDG on Campus, Panimalar",
    desc: "Built a multilingual, platform-independent chatbot with Telegram integration and WhatsApp/Email escalation — securing 2nd place among competitive college teams.",
    img: "/ghacks.jpeg",
  },
  {
    medal: "🏆",
    place: "National Finalist",
    event: "Smart India Hackathon 2025",
    desc: "Selected among top teams nationwide for the AI Bloom's Taxonomy Analyzer — presented at SIH Grand Finale at Poornima University, Dec 2025.",
    img: "/sih.jpeg",
  },
];

const CERTS = [
  { icon: "☁️", name: "OCI GenAI & Oracle Agile", org: "Oracle" },
  { icon: "🤖", name: "GenAI Certification", org: "Infosys Springboard" },
  { icon: "📊", name: "Data Science for Beginners", org: "FutureSkills · Nasscom" },
  { icon: "☕", name: "Java Programming with OOPs", org: "Elewayte" },
  { icon: "🔷", name: "Cloud Platform Simulation", org: "Verizon · Forage" },
  { icon: "🧩", name: "Basics of DSA", org: "Simplilearn" },
  { icon: "💻", name: "Intro to Python, C, Java, SQL", org: "Sololearn" },
];

// ── Styles injected once ────────────────────────────────────────────
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #FDF6EC;
    --warm: #FFF8F0;
    --amber: #E8903A;
    --amber-l: #F2A855;
    --amber-d: #C9711F;
    --terra: #C85C38;
    --rust: #9E3D1E;
    --blush: #F2C4A0;
    --brown: #2D1506;
    --brown-m: #6B3812;
    --brown-l: #9C5A2E;
    --sand: #E8D5B7;
    --sand-d: #D4B896;
  }

  html { scroll-behavior: smooth; }
  body { background: var(--cream); color: var(--brown); font-family: 'Outfit', sans-serif; }

  ::selection { background: var(--amber); color: white; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--cream); }
  ::-webkit-scrollbar-thumb { background: var(--amber-d); border-radius: 3px; }

  @keyframes blob {
    0%,100% { border-radius: 60% 40% 70% 30%/50% 60% 40% 50%; }
    33%      { border-radius: 40% 60% 30% 70%/60% 40% 50% 60%; }
    66%      { border-radius: 50% 50% 60% 40%/40% 50% 70% 60%; }
  }
  @keyframes float {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-14px); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes fadeUp {
    from { opacity:0; transform: translateY(24px); }
    to   { opacity:1; transform: translateY(0); }
  }
  @keyframes pulse-ring {
    0%   { transform: scale(1);   opacity: 0.7; }
    100% { transform: scale(1.6); opacity: 0; }
  }

  .nav-link { position: relative; }
  .nav-link::after {
    content: '';
    position: absolute;
    left: 0; bottom: -2px;
    width: 0; height: 2px;
    background: var(--amber-d);
    transition: width 0.3s;
  }
  .nav-link:hover::after { width: 100%; }

  .skill-card:hover .skill-bar { transform: scaleX(1); }
  .skill-bar { transform: scaleX(0); transform-origin: left; }

  .project-card { transition: transform 0.35s, box-shadow 0.35s; }
  .project-card:hover { transform: translateY(-8px); box-shadow: 0 28px 60px rgba(45,21,6,0.18); }

  .cert-card { transition: all 0.25s; }
  .cert-card:hover { transform: translateX(6px); border-left: 4px solid var(--amber); }

  .tag { font-family: 'JetBrains Mono', monospace; }

  .achievement-card { transition: all 0.3s; }
  .achievement-card:hover { transform: translateY(-4px); }
`;

// ── Main Component ──────────────────────────────────────────────────
export default function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Inject global styles
    const style = document.createElement("style");
    style.textContent = GLOBAL_STYLES;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = navScrolled
    ? "rgba(253,246,236,0.92)"
    : "transparent";

  const s = (obj) => ({ style: obj });

  // ── NAV ──────────────────────────────────────────────────────────
  const Nav = () => (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "1rem 4rem",
      background: navBg,
      backdropFilter: navScrolled ? "blur(16px)" : "none",
      borderBottom: navScrolled ? "1px solid #E8D5B7" : "none",
      transition: "all 0.4s",
    }}>
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.6rem", fontWeight: 700,
        color: "var(--amber-d)",
        letterSpacing: "-0.02em",
      }}>Pooja U</span>

      <div style={{ display: "flex", gap: "2.5rem", listStyle: "none" }}>
        {["skills", "projects", "education", "experience", "achievements", "contact"].map(s => (
          <a key={s} href={`#${s}`} className="nav-link" style={{
            textDecoration: "none",
            color: "var(--brown-m)",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>{s}</a>
        ))}
      </div>
    </nav>
  );

  // ── HERO ──────────────────────────────────────────────────────────
  const Hero = () => (
    <section id="home" style={{
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative grid lines */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(232,144,58,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232,144,58,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* LEFT */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "9rem 3rem 4rem 6rem", position: "relative", zIndex: 2,
      }}>
        {/* Pill tag */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "rgba(232,144,58,0.15)",
          border: "1px solid rgba(232,144,58,0.4)",
          color: "var(--amber-d)",
          padding: "0.35rem 1rem",
          borderRadius: 50,
          fontSize: "0.72rem", fontWeight: 700,
          letterSpacing: "0.15em", textTransform: "uppercase",
          marginBottom: "1.8rem", width: "fit-content",
          animation: "fadeUp 0.8s ease both",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--amber)", display: "inline-block", animation: "pulse-ring 1.5s infinite" }} />
          Open to Opportunities
        </div>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(3.5rem, 5.5vw, 6rem)",
          fontWeight: 700,
          lineHeight: 1.0,
          color: "var(--brown)",
          marginBottom: "0.3rem",
          animation: "fadeUp 0.8s 0.1s ease both",
        }}>
          Pooja{" "}<em style={{ color: "var(--amber-d)", fontStyle: "italic" }}>Umanath</em>
        </h1>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.35rem", fontStyle: "italic",
          color: "var(--brown-l)", marginBottom: "1.8rem",
          animation: "fadeUp 0.8s 0.2s ease both",
        }}>
          Java Developer · AI Systems Builder · SIH 2025 Finalist
        </p>

        <p style={{
          fontSize: "0.97rem", lineHeight: 1.85,
          color: "var(--brown-m)", maxWidth: 480,
          marginBottom: "2.5rem",
          animation: "fadeUp 0.8s 0.3s ease both",
        }}>
          IT undergraduate crafting intelligent systems at the intersection of Java, AI, and modern web. I build things that <em>think</em> — multilingual chatbots, Bloom's Taxonomy analyzers, embedded systems — with precision and purpose.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", animation: "fadeUp 0.8s 0.4s ease both" }}>
          <a href="#projects" style={{
            background: "var(--amber-d)", color: "white",
            padding: "0.9rem 2.2rem", borderRadius: 50,
            textDecoration: "none", fontWeight: 700, fontSize: "0.9rem",
            transition: "all 0.25s",
          }}
            onMouseEnter={e => { e.target.style.background = "var(--terra)"; e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 10px 28px rgba(201,113,31,0.38)"; }}
            onMouseLeave={e => { e.target.style.background = "var(--amber-d)"; e.target.style.transform = ""; e.target.style.boxShadow = ""; }}
          >View My Work →</a>

          <a
            href="/resume.pdf"
            download="Pooja_Umanath_Resume.pdf"
            style={{
              background: "transparent", color: "var(--brown)",
              padding: "0.9rem 2.2rem", borderRadius: 50,
              textDecoration: "none", fontWeight: 700, fontSize: "0.9rem",
              border: "2px solid var(--amber-d)",
              transition: "all 0.25s",
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--amber-d)"; e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(201,113,31,0.28)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--brown)"; e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
          >⬇ Download Resume</a>

          <a href="https://github.com/pooja3122005" target="_blank" style={{
            background: "transparent", color: "var(--brown)",
            padding: "0.9rem 2.2rem", borderRadius: 50,
            textDecoration: "none", fontWeight: 600, fontSize: "0.9rem",
            border: "2px solid var(--sand-d)",
            transition: "all 0.25s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "var(--amber)"; e.target.style.color = "var(--amber-d)"; }}
            onMouseLeave={e => { e.target.style.borderColor = "var(--sand-d)"; e.target.style.color = "var(--brown)"; }}
          >GitHub ↗</a>
        </div>

        {/* Social row */}
        <div style={{ display: "flex", gap: "1.5rem", marginTop: "2.5rem", animation: "fadeUp 0.8s 0.5s ease both" }}>
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/pooja-umanath-37154529b", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" },
            { label: "LeetCode", href: "https://leetcode.com/u/PoojaU3/", icon: "https://cdn.simpleicons.org/leetcode" },
            { label: "HackerRank", href: "https://www.hackerrank.com/profile/poojaumanath3", icon: "https://cdn.simpleicons.org/hackerrank" },
            { label: "GeeksForGeeks", href: "https://www.geeksforgeeks.org/profile/poojaumjg2t", icon: "https://cdn.simpleicons.org/geeksforgeeks" },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" style={{
              color: "var(--brown-m)", textDecoration: "none",
              fontSize: "0.85rem", fontWeight: 600,
              display: "flex", alignItems: "center", gap: "0.45rem",
              transition: "transform 0.25s, color 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--amber-d)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--brown-m)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <img src={l.icon} alt={l.label} style={{ width: 16, height: 16 }} />
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT — photo + decorations */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* blob bg */}
        <div style={{
          position: "absolute",
          width: 500, height: 500,
          background: "radial-gradient(circle at 40% 40%, #F2C4A0, #E8903A 50%, #C9711F 100%)",
          borderRadius: "60% 40% 70% 30%/50% 60% 40% 50%",
          animation: "blob 8s ease-in-out infinite",
          opacity: 0.82,
        }} />

        {/* Spinning ring */}
        <div style={{
          position: "absolute",
          width: 560, height: 560,
          border: "1px dashed rgba(201,113,31,0.4)",
          borderRadius: "50%",
          animation: "spin-slow 30s linear infinite",
        }} />

        {/* Photo */}
        <div style={{ position: "relative", zIndex: 2, animation: "fadeUp 1s 0.3s ease both" }}>
          <img
            src="/profile.jpeg"
            alt="Pooja Umanath"
            style={{
              width: 340, height: 420,
              objectFit: "cover", objectPosition: "top",
              borderRadius: "180px 180px 160px 160px",
              border: "6px solid white",
              boxShadow: "0 24px 60px rgba(45,21,6,0.28)",
              display: "block",
            }}
          />

          {/* Badge */}
          <div style={{
            position: "absolute", bottom: 20, right: -20,
            background: "white", borderRadius: 16,
            padding: "0.9rem 1.1rem",
            boxShadow: "0 8px 32px rgba(45,21,6,0.18)",
            display: "flex", alignItems: "center", gap: "0.8rem",
            animation: "fadeUp 1s 0.7s ease both",
          }}>
            <div style={{
              width: 44, height: 44,
              background: "linear-gradient(135deg, var(--amber), var(--terra))",
              borderRadius: 12,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.4rem",
            }}>🏆</div>
            <div style={{ lineHeight: 1.3 }}>
              <strong style={{ fontSize: "0.82rem", display: "block", color: "var(--brown)" }}>SIH 2025 Finalist</strong>
              <span style={{ fontSize: "0.7rem", color: "var(--brown-m)" }}>Top teams nationwide</span>
            </div>
          </div>
        </div>

        {/* Float chips */}
        {[
          { label: "☕ Java Enthusiast", top: "16%", left: "4%", delay: "0s" },
          { label: "🤖 AI Builder", bottom: "22%", right: "4%", delay: "1.5s" },
        ].map((chip, i) => (
          <div key={i} style={{
            position: "absolute",
            top: chip.top, left: chip.left,
            bottom: chip.bottom, right: chip.right,
            background: "white", borderRadius: 50,
            padding: "0.5rem 1.1rem",
            fontSize: "0.75rem", fontWeight: 700,
            color: "var(--brown)",
            boxShadow: "0 4px 18px rgba(45,21,6,0.14)",
            border: "1px solid var(--sand)",
            whiteSpace: "nowrap",
            animation: `float 4s ${chip.delay} ease-in-out infinite`,
            zIndex: 3,
          }}>{chip.label}</div>
        ))}
      </div>
    </section>
  );

  // ── STATS BAR ─────────────────────────────────────────────────────
  const StatsBar = () => (
    <div style={{
      background: "var(--amber-d)",
      display: "flex", justifyContent: "space-around",
      alignItems: "center", padding: "2.5rem 6rem", gap: "2rem",
    }}>
      {[
        { n: "4+", l: "Projects Built" },
        { n: "3", l: "Internships" },
        { n: "7+", l: "Certifications" },
        { n: "1", l: "Hackathon Wins" },

      ].map((s, i) => (
        <div key={i} style={{ textAlign: "center" }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2.8rem", fontWeight: 700,
            color: "white", display: "block", lineHeight: 1,
          }}>{s.n}</span>
          <span style={{
            fontSize: "0.72rem", letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--blush)",
            display: "block", marginTop: "0.3rem",
          }}>{s.l}</span>
        </div>
      ))}
    </div>
  );

  // ── SECTION HEADER ────────────────────────────────────────────────
  const SectionHeader = ({ label, title, light }) => (
    <div style={{ marginBottom: "3rem" }}>
      <div style={{
        display: "flex", alignItems: "center", gap: "0.8rem",
        fontSize: "0.72rem", fontWeight: 700,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: light ? "var(--amber-l)" : "var(--amber-d)",
        marginBottom: "0.7rem",
      }}>
        {label}
        <span style={{
          flex: 1, maxWidth: 60, height: 2,
          background: light ? "var(--amber-l)" : "var(--amber-d)",
          display: "inline-block",
        }} />
      </div>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(2rem, 4vw, 3rem)",
        fontWeight: 700, lineHeight: 1.15,
        color: light ? "white" : "var(--brown)",
      }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );

  // ── SKILLS ────────────────────────────────────────────────────────
  const Skills = () => (
    <section id="skills" style={{ padding: "6rem", background: "#FFF8F0" }}>
      <Reveal>
        <SectionHeader label="What I Know" title="Technical <em style='color:var(--amber-d);font-style:italic'>Skills</em>" />
      </Reveal>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "1.4rem",
      }}>
        {SKILLS.map((sk, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <div className="skill-card" style={{
              background: "white",
              borderRadius: 20, padding: "1.8rem",
              border: "1px solid var(--sand)",
              cursor: "default",
              position: "relative", overflow: "hidden",
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 16px 40px rgba(45,21,6,0.12)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = ""}
            >
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: "linear-gradient(90deg, var(--amber), var(--terra))",
                className: "skill-bar",
                transition: "transform 0.4s",
              }} />
              <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>{sk.icon}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.15rem", fontWeight: 700,
                color: "var(--brown)", marginBottom: "0.9rem",
              }}>{sk.label}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {sk.items.map((it, j) => (
                  <span key={j} className="tag" style={{
                    background: "var(--cream)",
                    color: "var(--brown-m)",
                    padding: "0.28rem 0.7rem",
                    borderRadius: 50,
                    fontSize: "0.72rem", fontWeight: 500,
                    border: "1px solid var(--sand)",
                    display: "flex", alignItems: "center", gap: "0.4rem",
                  }}>
                    {it.logo.startsWith("http") ? (
                      <img src={it.logo} alt={it.name} style={{ width: 14, height: 14 }} />
                    ) : (
                      <span style={{ fontSize: "0.85rem", lineHeight: 1 }}>{it.logo}</span>
                    )}
                    {it.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );

  // ── PROJECTS ──────────────────────────────────────────────────────
  const Projects = () => (
    <section id="projects" style={{ padding: "6rem" }}>
      <Reveal>
        <SectionHeader label="What I've Built" title="Featured <em style='color:var(--amber-d);font-style:italic'>Projects</em>" />
      </Reveal>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: "1.8rem",
      }}>
        {PROJECTS.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="project-card" style={{
              background: "white",
              borderRadius: 24, overflow: "hidden",
              border: "1px solid var(--sand)",
              display: "flex", flexDirection: "column",
            }}>
              {/* Header */}
              <div style={{
                padding: "2rem 2rem 1.5rem",
                background: "linear-gradient(135deg, var(--cream), var(--sand))",
                position: "relative",
              }}>
                <span style={{
                  position: "absolute", top: "1.2rem", right: "1.5rem",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "3rem", fontWeight: 700,
                  color: "var(--sand-d)", opacity: 0.6, lineHeight: 1,
                }}>{p.num}</span>
                <div style={{ fontSize: "2rem", marginBottom: "0.6rem" }}>{p.emoji}</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.2rem", fontWeight: 700,
                  color: "var(--brown)", lineHeight: 1.3,
                }}>{p.title}</div>
              </div>
              {/* Body */}
              <div style={{ padding: "1.5rem 2rem 2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{
                  fontSize: "0.88rem", lineHeight: 1.75,
                  color: "var(--brown-m)", flex: 1, marginBottom: "1.2rem",
                }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
                  {p.tags.map((t, j) => (
                    <span key={j} className="tag" style={{
                      background: "linear-gradient(135deg, var(--amber), var(--amber-d))",
                      color: "white", padding: "0.22rem 0.65rem",
                      borderRadius: 50, fontSize: "0.68rem", fontWeight: 600,
                    }}>{t}</span>
                  ))}
                </div>
                <a href={p.link} target="_blank" style={{
                  color: "var(--amber-d)", fontSize: "0.82rem", fontWeight: 700,
                  textDecoration: "none", letterSpacing: "0.05em",
                  display: "inline-flex", alignItems: "center", gap: "0.3rem",
                }}
                  onMouseEnter={e => e.target.style.color = "var(--terra)"}
                  onMouseLeave={e => e.target.style.color = "var(--amber-d)"}
                >View on GitHub →</a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      {/* More projects on GitHub */}
      <div style={{ textAlign: "center", marginTop: "1.6rem" }}>
        <p style={{ color: "var(--brown-m)", marginBottom: "0.6rem" }}>
          Browse the full collection — experiments, open-source work, and side builds.
        </p>
        <a
          href="https://github.com/pooja3122005?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "transparent",
            color: "var(--brown)",
            padding: "0.9rem 1.6rem",
            borderRadius: 50,
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "0.92rem",
            border: "2px solid var(--sand-d)",
            transition: "all 0.18s",
            display: "inline-block",
          }}
          onMouseEnter={e => { e.target.style.borderColor = "var(--amber)"; e.target.style.color = "var(--amber-d)"; e.target.style.boxShadow = "0 10px 28px rgba(201,113,31,0.18)" }}
          onMouseLeave={e => { e.target.style.borderColor = "var(--sand-d)"; e.target.style.color = "var(--brown)"; e.target.style.boxShadow = "" }}
        >
          More projects on GitHub →
        </a>
      </div>
    </section>
  );

  // ── EDUCATION ─────────────────────────────────────────────────────
  const Education = () => (
    <section id="education" style={{ padding: "6rem", background: "var(--cream)" }}>
      <Reveal>
        <SectionHeader label="Academic Background" title="My <em style='color:var(--amber-d);font-style:italic'>Education</em>" />
      </Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {EDUCATION.map((edu, i) => (
          <Reveal key={i} delay={i * 0.12}>
            <div style={{
              background: "white",
              borderRadius: 24,
              border: "1px solid var(--sand)",
              padding: "2.5rem",
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "2rem",
              alignItems: "flex-start",
              transition: "all 0.3s",
              boxShadow: "0 4px 20px rgba(45,21,6,0.04)",
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 16px 48px rgba(45,21,6,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(45,21,6,0.04)"; e.currentTarget.style.transform = ""; }}
            >
              {/* Icon */}
              <div style={{
                width: 64, height: 64,
                background: "linear-gradient(135deg, var(--blush), var(--amber-l))",
                borderRadius: 20,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.9rem",
                flexShrink: 0,
              }}>{edu.icon}</div>

              {/* Info */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.3rem", fontWeight: 700,
                    color: "var(--brown)", margin: 0,
                  }}>{edu.degree}</h3>
                  <span style={{
                    background: "rgba(232,144,58,0.12)",
                    color: "var(--amber-d)",
                    padding: "0.2rem 0.75rem",
                    borderRadius: 50,
                    fontSize: "0.68rem", fontWeight: 700,
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                  }}>{edu.type}</span>
                </div>

                <div style={{
                  display: "flex", alignItems: "center", gap: "1.2rem",
                  marginBottom: "0.8rem", flexWrap: "wrap",
                }}>
                  <span style={{
                    fontSize: "0.88rem", fontWeight: 600,
                    color: "var(--amber-d)",
                    display: "flex", alignItems: "center", gap: "0.3rem",
                  }}>🏛 {edu.school}</span>

                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    color: "var(--brown-m)",
                    display: "flex", alignItems: "center", gap: "0.3rem",
                  }}>📅 {edu.period}</span>
                </div>

                <p style={{
                  fontSize: "0.88rem",
                  color: "var(--brown-m)",
                  lineHeight: 1.75,
                  margin: 0,
                }}>{edu.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );

  // ── EXPERIENCE ────────────────────────────────────────────────────
  const Experience = () => (
    <section id="experience" style={{ padding: "6rem", background: "#FFF8F0" }}>
      <Reveal>
        <SectionHeader label="Where I've Worked" title="Work <em style='color:var(--amber-d);font-style:italic'>Experience</em>" />
      </Reveal>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {INTERNSHIPS.map((exp, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div style={{
              display: "grid", gridTemplateColumns: "180px 1fr",
              gap: "3rem", padding: "2.5rem 0",
              borderBottom: "1px solid var(--sand)",
              ...(i === 0 ? { borderTop: "1px solid var(--sand)" } : {}),
            }}>
              <div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem", color: "var(--brown-m)",
                  display: "block", paddingTop: "0.3rem",
                }}>{exp.year}</span>
                <span style={{
                  display: "inline-block", marginTop: "0.5rem",
                  background: "rgba(232,144,58,0.12)",
                  color: "var(--amber-d)",
                  padding: "0.2rem 0.7rem",
                  borderRadius: 50,
                  fontSize: "0.68rem", fontWeight: 600,
                }}>{exp.type}</span>
              </div>
              <div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.2rem", fontWeight: 700,
                  color: "var(--brown)", marginBottom: "0.2rem",
                }}>{exp.role}</div>
                <div style={{
                  fontSize: "0.85rem", fontWeight: 700,
                  color: "var(--amber-d)", marginBottom: "0.7rem",
                }}>{exp.company}</div>
                <p style={{ fontSize: "0.88rem", color: "var(--brown-m)", lineHeight: 1.75 }}>{exp.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );

  // ── ACHIEVEMENTS ─────────────────────────────────────────────────
  const Achievements = () => (
    <section id="achievements" style={{
      padding: "6rem",
      background: "var(--brown)",
      position: "relative", overflow: "hidden",
    }}>
      {/* giant text watermark */}
      <div style={{
        position: "absolute",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "18vw", fontWeight: 900,
        color: "rgba(255,255,255,0.03)",
        top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        whiteSpace: "nowrap", pointerEvents: "none",
        userSelect: "none",
      }}>WINS</div>

      <Reveal>
        <SectionHeader light label="Milestones" title="Achievements & <em style='color:var(--amber-l);font-style:italic'>Recognition</em>" />
      </Reveal>

      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "2rem", marginBottom: "2.5rem",
      }}>
        {ACHIEVEMENTS.map((ach, i) => (
          <Reveal key={i} delay={i * 0.12}>
            <div
              className="achievement-card"
              onClick={() => setActiveModal(ach)}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(242,168,85,0.3)",
                borderRadius: 20, padding: "2.5rem",
                cursor: "pointer", backdropFilter: "blur(4px)",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.10)"; e.currentTarget.style.borderColor = "var(--amber-l)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(242,168,85,0.3)"; }}
            >
              <span style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}>{ach.medal}</span>
              <div style={{
                fontSize: "0.72rem", letterSpacing: "0.15em",
                textTransform: "uppercase", color: "var(--amber-l)",
                marginBottom: "0.5rem",
              }}>{ach.event}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem", fontWeight: 700,
                color: "white", marginBottom: "0.8rem",
              }}>{ach.place}</div>
              <p style={{ fontSize: "0.87rem", color: "rgba(253,246,236,0.68)", lineHeight: 1.75 }}>{ach.desc}</p>
              <div style={{
                marginTop: "1.5rem",
                fontSize: "0.75rem", fontWeight: 700,
                color: "var(--amber-l)", letterSpacing: "0.08em",
              }}>Click to expand ↗</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );

  // ── CERTIFICATIONS ────────────────────────────────────────────────
  const Certifications = () => (
    <section style={{ padding: "6rem", background: "#FFF8F0" }}>
      <Reveal>
        <SectionHeader label="Credentials" title="Certifications" />
      </Reveal>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "1rem",
      }}>
        {CERTS.map((c, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="cert-card" style={{
              background: "white", border: "1px solid var(--sand)",
              borderRadius: 14, padding: "1.2rem 1.5rem",
              display: "flex", alignItems: "center", gap: "1rem",
            }}>
              <div style={{
                width: 42, height: 42, flexShrink: 0,
                background: "linear-gradient(135deg, var(--blush), var(--amber-l))",
                borderRadius: 12,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.1rem",
              }}>{c.icon}</div>
              <div>
                <strong style={{ display: "block", fontSize: "0.82rem", color: "var(--brown)", fontWeight: 600 }}>{c.name}</strong>
                <span style={{ fontSize: "0.71rem", color: "var(--brown-m)" }}>{c.org}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );

  // ── CONTACT ───────────────────────────────────────────────────────
  const Contact = () => (
    <section id="contact" style={{
      padding: "7rem 6rem",
      background: "linear-gradient(135deg, var(--amber-d), var(--terra), var(--rust))",
      textAlign: "center", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "18vw", fontWeight: 900,
        color: "rgba(255,255,255,0.04)",
        top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        whiteSpace: "nowrap", pointerEvents: "none",
      }}>HIRE ME</div>

      <Reveal>
        <p style={{
          fontSize: "0.72rem", letterSpacing: "0.2em",
          textTransform: "uppercase", color: "var(--blush)",
          marginBottom: "1rem",
        }}>Let's Collaborate</p>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          fontWeight: 700, color: "white",
          lineHeight: 1.1, marginBottom: "1.5rem",
        }}>
          Let's Build<br />Something <em>Great</em>
        </h2>

        <p style={{
          color: "rgba(255,255,255,0.78)",
          fontSize: "1rem", maxWidth: 460, margin: "0 auto 2.5rem",
          lineHeight: 1.8,
        }}>
          Open to internships, projects, and collaborations. Reach out — let's make something remarkable together.
        </p>

        <a href="mailto:poojaumanath3@gmail.com" style={{
          display: "inline-block",
          background: "white", color: "var(--amber-d)",
          padding: "1rem 2.8rem", borderRadius: 50,
          fontWeight: 800, fontSize: "1rem",
          textDecoration: "none", marginBottom: "2.5rem",
          transition: "all 0.25s",
        }}
          onMouseEnter={e => { e.target.style.transform = "scale(1.05)"; e.target.style.boxShadow = "0 14px 40px rgba(45,21,6,0.3)"; }}
          onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}
        >poojaumanath3@gmail.com</a>

        <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap" }}>
          {[
            { label: "GitHub", href: "https://github.com/pooja3122005", icon: "https://cdn.simpleicons.org/github/white" },
            { label: "LinkedIn", href: "https://linkedin.com/in/pooja-umanath-37154529b", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" },
            { label: "LeetCode", href: "https://leetcode.com/u/PoojaU3/", icon: "https://cdn.simpleicons.org/leetcode/white" },
            { label: "HackerRank", href: "https://www.hackerrank.com/profile/poojaumanath3", icon: "https://cdn.simpleicons.org/hackerrank/white" },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" style={{
              color: "rgba(255,255,255,0.75)", textDecoration: "none",
              fontSize: "0.85rem", fontWeight: 600,
              display: "flex", alignItems: "center", gap: "0.5rem",
              transition: "transform 0.25s, color 0.25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "white"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.querySelector("img").style.opacity = "1"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.75)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.querySelector("img").style.opacity = "0.75"; }}
            >
              <img src={l.icon} alt={l.label} style={{ width: 18, height: 18, opacity: 0.75, transition: "opacity 0.25s" }} />
              {l.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );

  // ── FOOTER ────────────────────────────────────────────────────────
  const Footer = () => (
    <footer style={{
      background: "var(--brown)", textAlign: "center",
      padding: "1.5rem",
      color: "rgba(253,246,236,0.35)", fontSize: "0.77rem",
    }}>
      Designed & Built by Pooja Umanath · 2025 · Kanchipuram, Tamil Nadu 🌸
    </footer>
  );

  // ── MODAL ─────────────────────────────────────────────────────────
  const Modal = () => {
    if (!activeModal) return null;
    return (
      <div
        onClick={() => setActiveModal(null)}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(45,21,6,0.75)",
          backdropFilter: "blur(8px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 1000,
          animation: "fadeUp 0.3s ease",
        }}
      >
        <div
          onClick={e => e.stopPropagation()}
          style={{
            background: "var(--warm)",
            borderRadius: 24, padding: "3rem",
            maxWidth: 520, width: "90%",
            position: "relative",
            boxShadow: "0 32px 80px rgba(45,21,6,0.3)",
          }}
        >
          <button
            onClick={() => setActiveModal(null)}
            style={{
              position: "absolute", top: "1.2rem", right: "1.5rem",
              background: "none", border: "none",
              fontSize: "1.2rem", cursor: "pointer",
              color: "var(--brown-m)",
            }}
          >✕</button>

          <span style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}>{activeModal.medal}</span>

          <div style={{
            fontSize: "0.72rem", letterSpacing: "0.15em",
            textTransform: "uppercase", color: "var(--amber-d)",
            marginBottom: "0.5rem",
          }}>{activeModal.event}</div>

          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.8rem", fontWeight: 700,
            color: "var(--brown)", marginBottom: "1.2rem",
          }}>{activeModal.place}</h3>

          {activeModal.img ? (
            <div style={{ width: "100%", height: 200, marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={activeModal.img} alt={activeModal.event} style={{ maxWidth: "100%", maxHeight: 200, borderRadius: 12, objectFit: "cover" }} />
            </div>
          ) : (
            <div style={{
              width: "100%", height: 200,
              background: "linear-gradient(135deg, var(--blush), var(--amber-l))",
              borderRadius: 16, marginBottom: "1.5rem",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "4rem",
            }}>
              {activeModal.medal}
            </div>
          )}

          <p style={{ fontSize: "0.95rem", color: "var(--brown-m)", lineHeight: 1.8 }}>
            {activeModal.details || activeModal.desc}
          </p>
        </div>
      </div>
    );
  };

  // ── RENDER ────────────────────────────────────────────────────────
  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
      <Modal />
    </>
  );
}
