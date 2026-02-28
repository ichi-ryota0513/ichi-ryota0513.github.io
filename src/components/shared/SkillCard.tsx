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

export default function SkillCard({ group, className = "" }: SkillCardProps) {
  const Icon = group.icon

  return (
    <div
      className={`
        px-6 py-4
        border border-white/20 rounded-2xl
        bg-secondary/40 backdrop-blur-sm
        ${className}
      `}
    >
      {/* カテゴリタイトル */}
      <h3 className="flex items-center gap-3 text-primary text-xl font-bold mb-6">
        {group.category}
        <Icon className="w-6 h-6 stroke-[1.5]" />
      </h3>

      {/* スキルグリッド */}
      <div className="grid gap-2 lg:gap-4 md:grid-cols-3 grid-cols-4">
        {group.items.map((skill) => (
          <div
            key={skill.name}
            className="
              aspect-square
              flex flex-col items-center justify-center
              bg-white/30 backdrop-blur-sm
              border border-white/20 rounded-xl
              p-2 md:p-3 lg:py-2 lg:px-4
            "
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="
                w-full h-full
                max-w-[105px] max-h-[105px] lg:max-w-none lg:max-h-none
                object-contain
              "
            />
            <span className="hidden lg:block text-sm font-medium text-center text-black mt-1">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}