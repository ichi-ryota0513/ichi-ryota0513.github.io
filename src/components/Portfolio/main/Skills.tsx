import SectionBackground from "../../shared/SectionBackground"
import SkillCard from "../../shared/SkillCard"
import { Monitor, Server, Database, Wrench } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: Monitor,
    items: [
      { name: "HTML", icon: "/icons/html5.svg" },
      { name: "CSS", icon: "/icons/css3.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name:"TypeScript", icon: "/icons/typescript.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { name:"Chakra UI", icon: "/icons/chakraui.svg" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name:"python", icon: "/icons/python.svg" },
      { name:"flask", icon: "/icons/flask.svg" },
      { name: "PHP", icon: "/icons/php.svg" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    items: [
      { name: "MAMP", icon: "/icons/mamp.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name:"postgreSQL", icon:"/icons/postgresql.svg" },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name:"vite", icon:"/icons/vite.svg" },
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
        <div className="mb-5 xs:mb-10 md:mb-16">
          <h2
            className="
              text-white
              text-3xl xs:text-4xl md:text-6xl
              font-bold
              text-center md:text-left
            "
          >
            Skills
          </h2>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-0 xs:mx-12 md:mx-0">
          {/* Frontend */}
          {skills.filter((g) => g.category === "Frontend").map(group => (
            <SkillCard key={group.category} group={group} />
          ))}

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {skills.filter((g) => g.category !== "Frontend").map(group => (
              <SkillCard key={group.category} group={group} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
