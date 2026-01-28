import SectionBackground from "./SectionBackground"
import { Monitor, Server, Wrench } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: Monitor,
    items: [
      { name: "HTML", icon: "/icons/html5.svg" },
      { name: "CSS", icon: "/icons/css3.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "TailwindCSS", icon: "/icons/tailwindcss.svg" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name:"python", icon: "/icons/python.svg" },
      { name:"TypeScript", icon: "/icons/typescript.svg" },
      { name: "PHP", icon: "/icons/php.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name:"postgreSQL", icon:"/icons/postgresql.svg" },
    ],
  },
  {
    category: "Other",
    icon: Wrench,
    items: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
    ],
  },
]


export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 scroll-mt-20"
    >
      <SectionBackground variant="pattern2" />

      <div className="relative z-10 max-w-5xl mx-auto px-10">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-white text-5xl md:text-6xl font-bold">
            Skills
          </h2>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((group) => (
            <div
              key={group.category}
              className="relative px-8 py-6 border border-white/20 rounded-2xl bg-secondary/40 backdrop-blur-sm"
            >
              <h3 className="flex items-center gap-3 text-primary text-xl font-bold mb-6">
                {group.category}
                <group.icon className="w-6 h-6 stroke-[1.5]" />
              </h3>

              <div className="grid grid-cols-3 gap-6">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex flex-col items-center justify-center
                      gap-3 p-4
                      bg-white/30 backdrop-blur-sm
                      border border-white/20 rounded-xl
                      hover:border-white/40 hover:bg-white/40
                      transition-colors
                    "
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-16 h-16"
                    />
                    <span className="text-sm font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
