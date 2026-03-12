import SectionBackground from "../../shared/SectionBackground"
import { Github, Slack } from "lucide-react"

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/ichi-ryota0513",
    icon: Github,
  },
  {
    name: "Slack",
    href: "https://n-highschool.slack.com/team/U06NAHJHE1M",
    icon: Slack,
  },
  {
    name: "Times",
    href: "https://n-highschool.slack.com/archives/C079G2D19H9",
    icon: Slack,
  },
]

export default function Footer() {
  return (
    <footer className="relative pt-12 md:pt-16 pb-6">
      {/* Background */}
      <SectionBackground variant="pattern1" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 md:px-10 flex flex-col items-center">
        
        {/* SNS Icons */}
        <div className="flex justify-center gap-6 sm:gap-10 md:gap-12 flex-wrap">
          {socials.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Icon */}
                <div
                  className="
                    w-12 h-12 md:w-14 md:h-14
                    flex items-center justify-center
                    rounded-full
                    border border-white/20
                    text-white/80
                    group-hover:text-primary
                    group-hover:border-primary
                    transition-colors
                  "
                >
                  <Icon size={22} strokeWidth={1.2} />
                </div>

                {/* Tooltip（PCのみ表示） */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="border border-primary text-primary text-xs px-3 py-1 rounded-full shadow">
                    {item.name}
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-12 md:mt-16 text-center text-white/40 text-xs md:text-sm px-4">
        © {new Date().getFullYear()} ichi-ryota0513. All Rights Reserved.
      </div>
    </footer>
  )
}