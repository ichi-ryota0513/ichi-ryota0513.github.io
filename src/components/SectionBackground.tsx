type Props = {
  variant?: "pattern1" | "pattern2"
}

export default function SectionBackground({
  variant = "pattern2"
}: Props) {
  return (
    <div className="absolute inset-0">
      {/* Base color */}
      <div
        className={
          variant === "pattern1"
            ? "absolute inset-0 bg-secondary"
            : "absolute inset-0 bg-secondary"
        }
      />

      {/* Overlay */}
      <div
        className={
          variant === "pattern1"
            ? "absolute inset-0 bg-black/40"
            : "absolute inset-0 bg-black/20"
        }
      />
    </div>
  )
}
