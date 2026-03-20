import AnimateIn from '@/components/ui/AnimateIn'

const CONTENT = {
  badge:    'Trusted by 500+ enterprises worldwide',
  headline: 'AI-Powered Intelligence',
  highlight: 'for Tomorrow\'s Business',
  subline:  'Zentrix AI integrates content generation, data analysis, workflow automation, and decision support into one seamless ecosystem — helping you reduce costs, boost productivity, and unlock new growth.',
  cta:      { label: 'Start Free Trial', href: '#contact' },
  secondary:{ label: 'Explore Platform',  href: '#features'   },
  stats: [
    { value: '50+',  label: 'AI Capabilities' },
    { value: '99.9%', label: 'Uptime SLA'    },
    { value: '10k+',  label: 'Tasks Automated Daily'},
  ],
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f] pt-nav"
    >
      {/* Layer 4: Depth - Dot grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(14, 165, 233, 0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
        }}
      />

      {/* Layer 3: Light - Mesh gradient orbs */}
      <div
        aria-hidden
        className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full bg-brand-500/20 blur-[180px] pointer-events-none animate-float"
      />
      <div
        aria-hidden
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-700/15 blur-[150px] pointer-events-none animate-float"
        style={{ animationDelay: '3s' }}
      />
      <div
        aria-hidden
        className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full bg-sky-400/10 blur-[120px] pointer-events-none animate-pulse-glow"
      />

      {/* Layer 4: Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <AnimateIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill border border-white/10 bg-white/[0.03] backdrop-blur-sm text-sm text-sky-400 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                {CONTENT.badge}
              </div>
            </AnimateIn>

            {/* Headline with gradient highlight */}
            <AnimateIn delay={80}>
              <h1 className="font-heading font-black text-[clamp(2.75rem,6vw,5rem)] leading-[0.95] tracking-[-0.04em] text-content-primary mb-6">
                {CONTENT.headline}{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-400 to-sky-400 bg-[length:200%_auto] animate-shimmer">
                  {CONTENT.highlight}
                </span>
              </h1>
            </AnimateIn>

            {/* Subline */}
            <AnimateIn delay={160}>
              <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-content-secondary/80 leading-relaxed font-light mb-10">
                {CONTENT.subline}
              </p>
            </AnimateIn>

            {/* CTAs */}
            <AnimateIn delay={240}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-500/40 blur-2xl rounded-xl scale-110 pointer-events-none" />
                  <a
                    href={CONTENT.cta.href}
                    className="relative inline-flex items-center gap-2 px-8 py-4 font-body font-medium bg-brand-500 text-content-inverse rounded-card hover:bg-brand-700 transition-all ease-expo-out active:scale-[0.97] shadow-glow"
                  >
                    {CONTENT.cta.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                <a
                  href={CONTENT.secondary.href}
                  className="inline-flex items-center gap-2 px-8 py-4 font-body font-medium border border-white/15 text-content-primary rounded-card hover:border-sky-400/50 hover:text-sky-400 hover:bg-sky-400/5 transition-all ease-expo-out"
                >
                  {CONTENT.secondary.label}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={320}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-10 py-8 border-t border-white/8">
                {CONTENT.stats.map((stat, i) => (
                  <div key={stat.label} className="relative">
                    <div className="font-heading font-black text-4xl text-brand-500 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-content-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* Right: Floating AI Dashboard Mockup */}
          <AnimateIn delay={200} animation="scale-in" className="hidden lg:block relative">
            <div className="relative">
              {/* Main dashboard card */}
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 shadow-card-lg overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-white/50 font-medium">AI Platform Dashboard</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </span>
                </div>

                {/* AI visualization */}
                <div className="relative h-32 mb-6 rounded-xl bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10 border border-white/5 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 blur-lg opacity-40 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Floating particles */}
                  <div className="absolute top-4 left-8 w-2 h-2 rounded-full bg-sky-400/60 animate-float" />
                  <div className="absolute top-8 right-12 w-1.5 h-1.5 rounded-full bg-blue-400/60 animate-float" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-6 left-16 w-1 h-1 rounded-full bg-violet-400/60 animate-float" style={{ animationDelay: '2s' }} />
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Automations', value: '1.2k', trend: '+24%', color: 'text-emerald-400' },
                    { label: 'AI Queries', value: '48k', trend: '+18%', color: 'text-sky-400' },
                    { label: 'Time Saved', value: '320h', trend: 'This week', color: 'text-violet-400' },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl bg-white/[0.04] p-3 border border-white/5">
                      <div className="text-xs text-white/40 mb-1.5">{m.label}</div>
                      <div className="font-heading font-bold text-white text-lg">{m.value}</div>
                      <div className={`text-xs mt-1 ${m.color}`}>{m.trend}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating metric card - top right */}
              <div className="absolute -top-6 -right-6 card-glass p-4 flex items-center gap-3 animate-float rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/50">Productivity</div>
                  <div className="font-heading font-bold text-lg text-white">+47%</div>
                </div>
              </div>

              {/* Floating badge - bottom left */}
              <div className="absolute -bottom-4 -left-4 card-glass p-3 flex items-center gap-3 animate-float rounded-xl" style={{ animationDelay: '1.5s' }}>
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500/20 to-blue-600/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/50">AI Model</div>
                  <div className="font-heading font-bold text-sm text-white">GPT-4 Turbo</div>
                </div>
              </div>

              {/* Floating code snippet - top left */}
              <div className="absolute -top-2 -left-8 card-glass p-3 animate-float rounded-lg" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/60" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <span className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-xs text-white/40 font-mono">workflow.ai</span>
                </div>
                <div className="mt-2 font-mono text-xs text-emerald-400/80">
                  <span className="text-sky-400">const</span> <span className="text-white/70">result</span> = <span className="text-amber-400">await</span> Zentrix.<span className="text-violet-400">analyze</span>()
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  )
}