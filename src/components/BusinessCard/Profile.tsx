import iconImage from "../../assets/myicon.png"
import SectionBackground from "../shared/SectionBackground"

export default function Profile() {
  return (
    <section
      className="relative flex items-center py-10"
    >
      <SectionBackground variant="pattern1" />

      <div className="
        relative z-10
        max-w-5xl mx-auto w-full
        px-4 md:px-10
        grid grid-cols-1
        gap-6
        items-center
      ">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="
            w-32 h-32
            rounded-full overflow-hidden
            border border-white/20
          ">
            <img
              src={iconImage}
              alt="Profile Icon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <div className="
          text-center
          flex flex-col items-center
        ">
          <h1 className="
            text-white font-bold leading-tight text-4xl
          ">
            RYOTA<br />
            <span className="text-primary">ICHIKAWA</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
