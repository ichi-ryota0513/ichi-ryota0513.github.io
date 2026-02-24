import SectionBackground from "../shared/SectionBackground"

const snsLinks = [
  { name: "LINE", image: "/sns/line.svg", link: "https://line.me/ti/p/BjsXI41P4L" },
  { name: "X (Twitter)", image: "/sns/x.svg", link: "https://x.com/RYOTA_RLGG" },
  { name: "Instagram", image: "/sns/instagram.svg", link: "https://www.instagram.com/ryota_rl" },
  { name: "Times", image: "/sns/slack.svg", link: "https://n-highschool.slack.com/archives/C079G2D19H9" },
  { name: "GitHub", image: "/sns/github.svg", link: "https://github.com/ichi-ryota0513" },
  { name: "Portfolio", image: "/sns/web.svg", link: "/" },
]

export default function SNS() {
  return (
    <section className="relative flex items-center p-10">
      <SectionBackground variant="pattern2" />

      <div className="
        relative z-10
        w-full
        max-w-md
        mx-auto
        px-6
      ">
        {/* Title */}
        <h2 className="text-white text-2xl font-bold text-center mb-8">
          SNS Links
        </h2>

        {/* Links */}
        <div className="space-y-4">
          {snsLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="
                flex items-center gap-4
                w-full
                min-h-[64px]
                px-5
                rounded-xl
                bg-black/10
                backdrop-blur-md
                border border-white/20
                hover:border-primary
                active:scale-[0.98]
                transition
              "
            >
              {/* icon */}
              <img
                src={item.image}
                alt={item.name}
                className="w-8 h-8"
              />

              {/* text */}
              <span className="text-white font-medium">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}