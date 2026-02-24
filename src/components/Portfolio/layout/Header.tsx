const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-8 h-16 md:h-20 flex items-center justify-center md:justify-between">
        {/* Logo / Name */}
        <div className="text-white font-bold tracking-wide text-xl md:text-2xl text-center">
          <a href="/">
            RYOTA's Portfolio
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-base text-white/80">
          <button
            onClick={() => scrollToSection("profile")}
            className="hover:text-primary transition-colors"
          >
            Profile
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="hover:text-primary transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("milestones")}
            className="hover:text-primary transition-colors"
          >
            Milestones
          </button>
        </nav>
      </div>
    </header>
  )
}
