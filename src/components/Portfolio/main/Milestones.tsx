import SectionBackground from "../../shared/SectionBackground"

const milestones = [
  {
    year: "2026",
    title: "「Boostudy」リリース",
  },
  {
    year: "",
    title: "日経STOCKリーグ 一次審査通過",
  },
  {
    year: "",
    title: "プロジェクトNγ 全国共有会出場",
  },
  {
    year: "2025",
    title: "ナレッジベース実行委員 活動開始",
  },
  {
    year: "",
    title: "キャンフェス実行委員長就任",
  },
  
  {
    year: "",
    title: "「ITパスポート かこもんくん」リリース",
  },
  {
    year: "2024",
    title: "ITパスポート試験取得",
  },
  {
    year: "2023",
    title: "日本漢字能力検定二級取得",
  },
]

export default function Milestones() {
  return (
    <section
      id="milestones"
      className="relative py-10 xs:py-16 md:py-32 scroll-mt-20"
    >
      <SectionBackground variant="pattern2" />

      <div className="relative z-10 max-w-5xl mx-auto px-10">
        {/* Title */}
        <div className="mb-5 xs:mb-10 md:mb-16">
          <h2
            className="
              text-white
              text-3xl xs:text-4xl md:text-6xl
              font-bold
              text-center md:text-left
            "
          >
            Milestones
          </h2>
        </div>

        {/* List */}
        <div className="space-y-10 md:space-y-16">
          {milestones.map((item, index) => (
            <div
              key={index}
              className="
                grid
                grid-cols-1
                md:grid-cols-12
                gap-3 md:gap-6
                items-start
              "
            >
              {/* Year */}
              <div
                className="
                  md:col-span-2
                  text-primary
                  text-lg md:text-xl
                  font-bold
                  tracking-wide
                "
              >
                {item.year}
              </div>

              {/* Content */}
              <div className="md:col-span-10 border-b border-white/20 pb-6 md:pb-8">
                <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
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