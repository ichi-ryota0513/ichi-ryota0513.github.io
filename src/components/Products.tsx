import SectionBackground from "./SectionBackground"

const products = [
  {
    title: "Portfolio Site",
    description: "当サイトです。自身の作品や経歴を紹介しています。",
    image: "/images/myicon.png",
    link: "/",
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "MagicBox",
    description: "入力に応じて図形が変化させて遊ぶことができます。",
    image: "/images/myicon.png",
    link: "https://ichi-ryota0513.github.io/MagicBox/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "ITパスポート かこもんくん",
    description: "ITパスポート試験の過去問演習特化型webアプリです。",
    image: "/images/kakomonkun.png",
    link: "https://ip-kakomonkun.com",
    tech: ["PHP", "JavaScript", "MySQL"],
  },
  {
    title: "キャンフェスサイト2024",
    description: "2024年度静岡キャンパスフェスティバル公式サイト。",
    image: "/images/default.png",
    link: "https://nnn-shizuoka.github.io/campus-festival-2024/",
    tech: ["HTML", "CSS", "JavaScript"],
  },
]

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-32 scroll-mt-20"
    >
      {/* Background */}
      <SectionBackground variant="pattern1" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-10">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-white text-5xl md:text-6xl font-bold">
            Products
          </h2>
        </div>

        {/* Product List */}
        <div className="space-y-10">
          {products.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group block"
            >
              <div className="flex items-start gap-8 p-6 border rounded-xl border-white/20 hover:border-primary transition-colors">
                {/* Icon */}
                <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-xl bg-secondary/60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-4 max-w-2xl">
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
