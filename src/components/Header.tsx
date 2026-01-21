export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="text-white font-bold tracking-wide text-2xl">
          <a href="/">
            RYOTA's Portfolio
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 text-base text-white/80">
          <a
            href="#profile"
            className="hover:text-primary transition-colors"
          >
            Profile
          </a>
          <a
            href="#skills"
            className="hover:text-primary transition-colors"
          >
            Skills
          </a>
          <a
            href="#products"
            className="hover:text-primary transition-colors"
          >
            Products
          </a>
          <a
            href="#milestones"
            className="hover:text-primary transition-colors"
          >
            Milestones
          </a>
        </nav>
      </div>
    </header>
  )
}
