import SectionBackground from "../shared/SectionBackground"

export default function Footer() {
  return (
    <footer className="relative py-3">
      {/* Background */}
      <SectionBackground variant="pattern1" />

      {/* Copyright */}
      <div className="relative z-10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} RYOTA. All Rights Reserved.
      </div>
    </footer>
  )
}
