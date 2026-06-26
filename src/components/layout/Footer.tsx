export default function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    { heading: "Technology", links: ["AI Agent Pipelines", "AI Sandbox Zones", "Telemetry Dashboard"] },
    { heading: "Platform",   links: ["Subscription Tiers", "System FAQ", "Developer API"] },
    { heading: "Resources",  links: ["Typography Guides", "Visual Palette", "System Status"] },
  ];

  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "64px 0 32px",
      }}
    >
      <div className="nm-container">
        {/* Top row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", marginBottom: "48px" }}>
          <style>{`@media(min-width:768px){.footer-grid{grid-template-columns:1.4fr 1fr 1fr 1fr!important}}`}</style>
          <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>

            {/* Brand column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: "linear-gradient(135deg, #FFC801 0%, #FF9932 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, color: "#07101A" }}>N</div>
                <span style={{ fontWeight: 700, fontSize: "14px", letterSpacing: "-0.02em", color: "#fff" }}>NEURAL<span style={{ color: "#FFC801" }}>.mesh</span></span>
              </div>
              <p style={{ fontSize: "13px", color: "rgba(240,246,243,0.45)", lineHeight: 1.7, maxWidth: "240px" }}>
                Deploying high-speed autonomous AI data automation pipelines and secure mesh nodes.
              </p>
              <div className="nm-badge nm-badge-green" style={{ width: "fit-content", gap: "6px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ADE80", animation: "pulse 2s ease-in-out infinite", display: "inline-block" }} />
                All Systems Operational
              </div>
            </div>

            {/* Link columns */}
            {cols.map(({ heading, links }) => (
              <div key={heading} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: "#FFC801" }}>{heading}</span>
                <nav aria-label={`Footer ${heading} Links`} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {links.map(l => (
                    <a key={l} href="#" className="nm-footer-link">{l}</a>
                  ))}
                </nav>
              </div>
            ))}

          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <span style={{ fontSize: "12px", color: "rgba(240,246,243,0.35)" }}>
            © {year} NEURAL.mesh Inc. Mapped for the IITB Frontend Battle.
          </span>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy Policy", "Terms of Service", "Node Security"].map(l => (
              <a key={l} href="#" className="nm-footer-link" style={{ fontSize: "12px" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
