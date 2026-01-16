import SectionBackground from "./SectionBackground"

const works = [
  {
    year: "2025",
    title: "「ITパスポート かこもんくん」リリース",
  },
  {
    year: "2024",
    title: "ITパスポート取得",
  },
  {
    year: "2023",
    title: "日本漢字能力検定二級取得",
    description: "",
  },
]

export default function Milestones() {
  return (
    <section
      id="milestones"
      className="relative py-32 scroll-mt-20"
    >
      {/* Background */}
      <SectionBackground variant="pattern1" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-10">
        {/* Section Title */}
        <div className="mb-20">
          <h2 className="text-white text-5xl md:text-6xl font-bold">
            Milestones
          </h2>
        </div>

        {/* Works List */}
        <div className="space-y-16">
          {works.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
            >
              {/* Year */}
              <div className="md:col-span-2 text-primary text-xl font-bold">
                {item.year}
              </div>

              {/* Content */}
              <div className="md:col-span-10 border-b border-white/20 pb-8">
                <p className="text-white text-2xl font-bold mb-3">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
