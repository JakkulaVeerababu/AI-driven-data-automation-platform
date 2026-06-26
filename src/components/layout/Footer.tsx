import Logo from "../shared/Logo";
import Container from "../shared/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-mystic-mint/10 bg-oceanic-noir text-arctic-powder/70 py-16 transition-all duration-300">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
          
          {/* Logo & Operational Status */}
          <div className="flex flex-col gap-6 md:col-span-1">
            <Logo />
            <p className="text-xs text-arctic-powder/50 leading-relaxed max-w-[240px]">
              Deploying high-speed autonomous AI data automation pipelines and secure mesh nodes. Engineered for top-tier developer platforms.
            </p>
            
            {/* Operational Status indicator (Premium touch) */}
            <div className="inline-flex items-center gap-2 text-3xs font-bold uppercase tracking-wider bg-nocturnal-expedition/30 border border-nocturnal-expedition/50 text-mystic-mint w-fit rounded-full px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Links Column 1: Technology */}
          <div className="flex flex-col gap-4">
            <span className="text-2xs font-extrabold uppercase tracking-widest text-forsythia">
              Technology
            </span>
            <nav className="flex flex-col gap-2.5 text-xs font-medium" aria-label="Footer Technology Links">
              <a
                href="#features"
                className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forsythia rounded py-0.5"
              >
                AI Agent Pipelines
              </a>
              <a
                href="#features"
                className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forsythia rounded py-0.5"
              >
                AI Sandbox Zones
              </a>
              <a
                href="#features"
                className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forsythia rounded py-0.5"
              >
                Telemetry Dashboard
              </a>
            </nav>
          </div>

          {/* Links Column 2: Platform */}
          <div className="flex flex-col gap-4">
            <span className="text-2xs font-extrabold uppercase tracking-widest text-forsythia">
              Platform
            </span>
            <nav className="flex flex-col gap-2.5 text-xs font-medium" aria-label="Footer Platform Links">
              <a
                href="#pricing"
                className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forsythia rounded py-0.5"
              >
                Subscription Tiers
              </a>
              <a
                href="#faq"
                className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forsythia rounded py-0.5"
              >
                System FAQ
              </a>
              <a
                href="#"
                className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forsythia rounded py-0.5"
              >
                Developer API
              </a>
            </nav>
          </div>

          {/* Links Column 3: Resources */}
          <div className="flex flex-col gap-4">
            <span className="text-2xs font-extrabold uppercase tracking-widest text-forsythia">
              Resources
            </span>
            <nav className="flex flex-col gap-2.5 text-xs font-medium" aria-label="Footer Resources Links">
              <a
                href="/docs/fonts.pdf"
                target="_blank"
                className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forsythia rounded py-0.5"
              >
                Typography Guides
              </a>
              <a
                href="/docs/colorPallet.pdf"
                target="_blank"
                className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forsythia rounded py-0.5"
              >
                Visual Palette
              </a>
              <a
                href="#"
                className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forsythia rounded py-0.5"
              >
                System Status
              </a>
            </nav>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-2xs text-arctic-powder/45 gap-4">
          <div>
            &copy; {currentYear} NEURAL.mesh Inc. Mapped for the IITB Frontend Battle.
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forsythia rounded py-0.5"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forsythia rounded py-0.5"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forsythia rounded py-0.5"
            >
              Node Security
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
