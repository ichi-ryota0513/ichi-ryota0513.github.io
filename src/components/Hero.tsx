import iconImage from "../assets/myicon.png"
import SectionBackground from "./SectionBackground"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <SectionBackground variant="pattern1" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-10 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-primary text-sm tracking-widest mb-4">
            PORTFOLIO
          </p>
          <h1 className="text-white text-6xl md:text-7xl font-bold leading-tight mb-6">
            RYOTA<br />
            <span className="text-primary">ICHIKAWA</span>
          </h1>
          <p className="text-white/70 max-w-md leading-relaxed">
            趣味：サッカー観戦<br />
            特技：ルービックキューブ<br />
            デジタル委員会所属
          </p>
        </div>

        {/* Icon */}
        <div className="flex md:justify-end">
          <div className="w-60 h-60 rounded-full overflow-hidden border border-white/20">
            <img
              src={iconImage}
              alt="Profile Icon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
