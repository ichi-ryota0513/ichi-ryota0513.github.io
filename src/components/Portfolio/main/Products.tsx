import SectionBackground from "../../shared/SectionBackground"

const products = [
  {
    title: "Portfolio Site",
    description: "当サイトです。自身の作品や経歴を紹介しています。",
    image: "/images/myicon.png",
    link: "/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Boostudy",
    description: "「学習を加速させる」をコンセプトに開発した、学習支援アプリです。",
    image: "/images/boostudy.png",
    link: "https://boostudy.app",
    tech: ["React", "Flask", "PostgreSQL", "OpenAI API"],
  },
  {
    title: "ITパスポート かこもんくん",
    description: "ITパスポート試験の過去問演習特化型webアプリです。",
    image: "/images/kakomonkun.png",
    link: "https://ip-kakomonkun.com",
    tech: ["PHP", "MySQL"],
  },
  {
    title: "MagicBox",
    description: "入力に応じて図形が変化させて遊ぶことができます。",
    image: "/images/myicon.png",
    link: "https://ichi-ryota0513.github.io/MagicBox/",
    tech: ["JavaScript"],
  },
]

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-10 xs:py-16 md:py-32 scroll-mt-20"
    >
      {/* Background */}
      <SectionBackground variant="pattern1" />

      {/* Content */}
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
            Products
          </h2>
        </div>

        {/* Product List */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {products.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group block bg-secondary/20 backdrop-blur-sm"
            >
              <div className="flex items-start gap-8 p-4 md:p-6 border rounded-xl border-white/20 hover:border-primary transition-colors">
                {/* Icon */}
                <div className="
                  w-16 h-16
                  md:w-24 md:h-24
                  flex-shrink-0
                  overflow-hidden
                  rounded-lg md:rounded-xl
                  bg-secondary/60
                ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="
                    text-white
                    text-base text-lg md:text-xl
                    font-bold mb-2
                    group-hover:text-primary transition-colors
                    break-keep
                  ">
                    {item.title}
                  </h3>
                  <p className="
                    hidden md:block
                    text-white/70 leading-relaxed mb-4 max-w-2xl
                  ">
                    {item.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-white/60 border border-white/20 px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
