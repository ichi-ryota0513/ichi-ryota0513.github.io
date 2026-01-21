import SectionBackground from "./SectionBackground"

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["PHP", "MySQL"],
  },
  {
    category: "Other",
    items: ["Git", "GitHub", "Figma"],
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-primary text-xl font-bold mb-6">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-white/70 border border-white/20 px-3 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
