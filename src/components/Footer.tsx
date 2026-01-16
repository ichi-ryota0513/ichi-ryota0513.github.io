import SectionBackground from "./SectionBackground"
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
]

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-5">
      {/* Background */}
      <SectionBackground variant="pattern2" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-10 flex flex-col items-center">
        {/* SNS Icons */}
        <div className="flex justify-center gap-12">
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
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-white/20 text-white/80 group-hover:text-primary group-hover:border-primary transition-colors">
                  <Icon size={24} strokeWidth={1.2} />
                </div>

                {/* Tooltip */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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
      <div className="relative z-10 mt-16 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} RYOTA. All Rights Reserved.
      </div>
    </footer>
  )
}
