import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const CONTENT = {
  eyebrow:   'Ready to Transform',
  heading:   'Unlock the Power of AI for Your Business',
  subtext:   'Zentrix AI brings together cutting-edge artificial intelligence in one seamless platform — content generation, data analysis, workflow automation, and decision support that scales with your ambitions.',
  cta:       { label: 'Start Free Trial', href: '#contact' },
  secondary: { label: 'See How It Works', href: '#features' },
  trust:     'Join 500+ forward-thinking teams already accelerating with AI',
}

export default function CTA() {
  return (
    <section className="py-section relative overflow-hidden bg-[#0f0f13]">
      {/* Background depth layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/15 blur-[180px] animate-pulse-glow" />
        {/* Secondary glow accent */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />
        {/* Dot grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }}
        />
        {/* Noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
          }}
        />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <AnimateIn>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            {CONTENT.trust}
          </span>
        </AnimateIn>

        <AnimateIn delay={100}>
          <p className="text-sm font-medium tracking-widest uppercase text-brand-500 mb-6">
            {CONTENT.eyebrow}
          </p>
        </AnimateIn>

        <AnimateIn delay={200}>
          <h2 className="font-heading font-black text-display-xl md:text-display-hero text-content-primary leading-[1.05] tracking-[-0.03em] mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-violet-400 to-brand-400 bg-[length:200%_auto] animate-shimmer">
              {CONTENT.heading}
            </span>
          </h2>
        </AnimateIn>

        <AnimateIn delay={300}>
          <p className="text-lg md:text-xl text-content-secondary/80 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            {CONTENT.subtext}
          </p>
        </AnimateIn>

        <AnimateIn delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Primary CTA with glow */}
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-500/50 blur-2xl rounded-card scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <a
                href={CONTENT.cta.href}
                className="relative z-10 inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-brand-500 text-content-inverse rounded-card hover:bg-brand-600 transition-all duration-300 ease-expo-out active:scale-[0.97] shadow-glow hover:shadow-glow-lg"
              >
                {CONTENT.cta.label}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
            
            {/* Secondary CTA */}
            <a
              href={CONTENT.secondary.href}
              className="group relative px-8 py-4 font-body font-medium border border-surface-border text-content-primary rounded-card hover:border-brand-500/50 hover:bg-surface-raised transition-all duration-300 ease-expo-out"
            >
              <span className="relative z-10">{CONTENT.secondary.label}</span>
              <div className="absolute inset-0 rounded-card bg-brand-500/0 group-hover:bg-brand-500/5 transition-colors duration-300" />
            </a>
          </div>
        </AnimateIn>

        {/* Feature highlights row */}
        <AnimateIn delay={500}>
          <div className="mt-16 pt-12 border-t border-surface-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '🚀', label: 'Deploy in Days' },
                { icon: '🔒', label: 'Enterprise Security' },
                { icon: '⚡', label: 'Real-Time Processing' },
                { icon: '📈', label: 'Scalable Growth' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-center gap-2 text-content-muted">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
    </section>
  )
}