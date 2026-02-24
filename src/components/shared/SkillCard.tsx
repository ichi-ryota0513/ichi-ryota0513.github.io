import type { ComponentType } from "react"

type SkillItem = {
  name: string
  icon: string
}

type SkillGroup = {
  category: string
  icon: ComponentType<{ className?: string }>
  items: SkillItem[]
}

type SkillCardProps = {
  group: SkillGroup
  className?: string
}

export default function SkillCard({
  group,
  className = "",
}: SkillCardProps) {
  const Icon = group.icon

  return (
    <div
      className={`
        px-8 py-6
        border border-white/20 rounded-2xl
        bg-secondary/40 backdrop-blur-sm
        ${className}
      `}
    >
      {/* Category title */}
      <h3 className="flex items-center gap-3 text-primary text-xl font-bold mb-6">
        {group.category}
        <Icon className="w-6 h-6 stroke-[1.5]" />
      </h3>

      {/* Skills */}
      <div className="grid grid-cols-3 gap-6">
        {group.items.map((skill) => (
          <div
            key={skill.name}
            className="
              flex flex-col items-center justify-center
              gap-3 p-3
              bg-white/30 backdrop-blur-sm
              border border-white/20 rounded-xl
            "
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16"
            />
            <span className="text-sm font-medium text-center text-black">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
