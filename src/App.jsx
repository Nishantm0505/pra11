
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const projects = [
  { number: "01", title: "Web Experience", icon: "✳", color: "from-violet-500 to-indigo-500" },
  { number: "02", title: "Creative Design", icon: "◈", color: "from-pink-500 to-rose-500" },
  { number: "03", title: "Digital Strategy", icon: "↗", color: "from-cyan-400 to-blue-500" },
];

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#09090f]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-xl font-black text-white shadow-lg shadow-violet-500/20">
            N
          </div>
          <div>
            <p className="text-lg font-black tracking-[0.18em] text-white">
              NEXUS<span className="text-violet-400">.</span>
            </p>
            <p className="text-[9px] tracking-[0.3em] text-gray-500">
              DIGITAL STUDIO
            </p>
          </div>
        </Link>

        <div className="flex gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <a
          href="mailto:hello@nexus.demo"
          className="hidden rounded-full border border-violet-400/40 px-5 py-2.5 text-sm text-violet-200 transition hover:bg-violet-500 hover:text-white sm:block"
        >
          Let's Talk ↗
        </a>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <main>
      <section className="relative mx-auto grid min-h-[570px] max-w-7xl items-center gap-12 overflow-hidden px-6 py-20 lg:grid-cols-2">
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs tracking-wide text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            INNOVATION STARTS HERE
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-violet-300">
            Independent digital studio
          </p>

          <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-7xl">
            We build
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
              digital
            </span>
            <br />
            experiences.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-gray-400">
            Turning ambitious ideas into beautiful websites, thoughtful
            designs, and unforgettable digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="group rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-4 font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
            >
              Explore our world
              <span className="ml-3 inline-block transition group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-white/15 px-6 py-4 font-semibold text-gray-200 transition hover:border-white/40 hover:bg-white/5"
            >
              Get in touch ↗
            </Link>
          </div>

          <div className="mt-12 flex gap-10 border-t border-white/10 pt-7">
            <div>
              <p className="text-2xl font-black text-white">03<span className="text-violet-400">+</span></p>
              <p className="mt-1 text-xs text-gray-500">Creative services</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">∞</p>
              <p className="mt-1 text-xs text-gray-500">Ideas to explore</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">100<span className="text-cyan-300">%</span></p>
              <p className="mt-1 text-xs text-gray-500">Creative energy</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-10 rounded-full bg-violet-600/20 blur-[80px]" />
          <div className="relative rotate-[-2deg] rounded-[2rem] border border-white/15 bg-white/[0.04] p-5 shadow-2xl shadow-violet-950/50 backdrop-blur-xl transition duration-500 hover:rotate-0">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs tracking-widest text-gray-500">NEXUS / 001</span>
            </div>

            <div className="relative mt-5 flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#342064] via-[#17152d] to-[#072d3c]">
              <div className="absolute h-48 w-48 rounded-full border border-violet-300/30" />
              <div className="absolute h-36 w-36 rounded-full border border-cyan-300/40" />
              <div className="absolute h-24 w-24 rounded-3xl bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-300 shadow-2xl shadow-fuchsia-500/30 [transform:rotate(35deg)] transition duration-700 hover:scale-110 hover:rotate-90" />
              <span className="absolute bottom-5 left-5 text-xs tracking-[0.25em] text-white/70">DESIGN BEYOND LIMITS</span>
              <span className="absolute right-5 top-5 text-2xl text-cyan-200">✳</span>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-white">Future / Form</p>
                <p className="mt-1 text-sm text-gray-500">A new digital perspective.</p>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-xl text-cyan-300">
                ↗
              </span>
            </div>
          </div>

          <div className="absolute -right-3 top-14 rounded-2xl border border-white/10 bg-[#171522] px-4 py-3 shadow-xl sm:-right-8">
            <p className="text-xs text-gray-500">CREATIVE MODE</p>
            <p className="mt-1 font-bold text-emerald-300">● Activated</p>
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-[#171522] px-5 py-3 shadow-xl sm:-left-8">
            <p className="text-xs text-gray-500">CURRENT FOCUS</p>
            <p className="mt-1 font-semibold text-white">Ideas → Impact ↗</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] text-violet-300">WHAT WE DO</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Small details. <span className="text-gray-500">Big impact.</span>
            </h2>
          </div>
          <span className="text-sm text-gray-500">Scroll less. Explore more. ↘</span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${project.color} text-2xl text-white shadow-lg`}>
                  {project.icon}
                </span>
                <span className="text-sm text-gray-600">{project.number} / 03</span>
              </div>
              <h3 className="mt-8 text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 leading-7 text-gray-400">
                Creative thinking, clean execution, and a digital experience
                designed to stand out.
              </p>
              <Link
                to="/about"
                className="mt-6 inline-block text-sm font-semibold text-violet-300 transition group-hover:text-cyan-300"
              >
                Discover more →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20">
      <div className="grid w-full gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm tracking-[0.3em] text-cyan-300">BEHIND THE PIXELS</p>
          <h1 className="mt-5 text-5xl font-black leading-tight text-white sm:text-6xl">
            Design with
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
              a purpose.
            </span>
          </h1>
          <p className="mt-7 max-w-xl leading-8 text-gray-400">
            NEXUS is a creative digital studio concept built around a simple
            idea: technology should be powerful, design should be meaningful,
            and every interaction should feel effortless.
          </p>
          <Link to="/contact" className="mt-8 inline-block rounded-xl bg-white px-6 py-4 font-bold text-black transition hover:bg-cyan-200">
            Let's create together ↗
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">
          {[
            ["01", "Our mission", "Make digital experiences simple, useful, and beautiful."],
            ["02", "Our approach", "Combine creativity, technology, and user-focused thinking."],
            ["03", "Our vision", "Turn ordinary ideas into memorable digital products."],
          ].map(([num, title, description]) => (
            <div key={num} className="flex gap-5 border-b border-white/10 py-6 first:pt-0 last:border-0 last:pb-0">
              <span className="text-sm font-bold text-violet-400">{num}</span>
              <div>
                <h2 className="font-bold text-white">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function Contact() {
  return (
    <main className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-20">
      <div className="absolute h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />
      <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.045] p-8 text-center backdrop-blur-xl sm:p-14">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-3xl text-white">
          ↗
        </span>
        <p className="mt-7 text-xs tracking-[0.35em] text-violet-300">YOUR NEXT CHAPTER</p>
        <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">
          Let's make it
          <span className="mt-2 block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
            happen.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-7 text-gray-400">
          Have an idea, a project, or a creative challenge? Start a
          conversation and let's explore the possibilities.
        </p>
        <a
          href="mailto:hello@nexus.demo?subject=Let's%20create%20something"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/20"
        >
          hello@nexus.demo <span>↗</span>
        </a>
        <p className="mt-6 text-xs text-gray-600">
          Demo email address — replace with your own before submission.
        </p>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-6 text-center">
      <div>
        <p className="text-8xl font-black text-violet-400">404</p>
        <h1 className="mt-4 text-3xl font-bold text-white">Lost in the digital universe?</h1>
        <p className="mt-4 text-gray-400">This page doesn't exist.</p>
        <Link to="/" className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-bold text-black">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-hidden bg-[#09090f] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer className="border-t border-white/10 px-6 py-7">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
            <p>© 2026 NEXUS STUDIO · CREATED WITH REACT</p>
            <p>THINK. DESIGN. BUILD. <span className="text-violet-400">✳</span></p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
