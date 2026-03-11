import iconImage from "../../../assets/myicon.png"
import SectionBackground from "../../shared/SectionBackground"

export default function Profile() {
  return (
    <section
      id="profile"
      className="relative min-h-screen flex items-center scroll-mt-20"
    >
      {/* Background */}
      <SectionBackground variant="pattern1" />

      <div className="
        relative z-10
        max-w-5xl mx-auto w-full
        px-10
        grid grid-cols-1 md:grid-cols-2
        gap-4 md:gap-16
        items-center
        text-center md:text-left
      ">

        {/* Icon */}
        <div className="
          order-1 md:order-2
          flex justify-center md:justify-end
        ">
          <div className="
            w-40 h-40
            md:w-52 md:h-52
            lg:w-60 lg:h-60
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

        {/* Text */}
        <div className="order-2 md:order-1 md:pt-20">

          {/* PCのみ表示 */}
          <p className="hidden md:block text-primary text-xs md:text-sm tracking-widest mb-4">
            PORTFOLIO
          </p>

          <h1 className="
            text-white font-bold leading-tight mb-6
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          ">
            RYOTA<br />
            <span className="text-primary">ICHIKAWA</span>
          </h1>

          <div className="
            relative px-4 md:px-6 py-4
            border border-white/20
            rounded-2xl
            bg-secondary/20 backdrop-blur-sm
            mx-auto md:mx-0
            max-w-xs
          ">
            <p className="text-white/70 leading-relaxed text-md">
              ニックネーム：いっちー<br />
              生年月日：2008年5月13日<br />
              趣味：サッカー観戦<br />
              特技：ルービックキューブ<br />
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}