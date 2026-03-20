'use client'
import { useEffect, useRef, useState } from 'react'
import AnimateIn from '@/components/ui/AnimateIn'

const stats = [
  { value: 50,    suffix: 'K+', label: 'Active Users',           description: 'Teams leveraging our AI daily' },
  { value: 500,   suffix: 'M+', label: 'AI Tokens Processed',    description: 'Intelligent decisions powered' },
  { value: 99.9,  suffix: '%', label: 'Platform Uptime',         description: 'Enterprise-grade reliability' },
  { value: 200,  suffix: '+', label: 'Integrations',            description: 'Seamless ecosystem connectivity' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.unobserve(el)
      const duration = 1800
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * target * 10) / 10)
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  const displayValue = target % 1 !== 0 ? count.toFixed(1) : Math.round(count)
  return <span ref={ref}>{displayValue}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="relative py-section overflow-hidden bg-[#0f0f13]">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/[0.08] blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/[0.06] blur-[140px] pointer-events-none" />
      
      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
           }} />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
             backgroundRepeat: 'repeat',
             backgroundSize: '256px 256px',
           }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <AnimateIn delay={0} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            Platform Performance
          </span>
          <h2 className="font-heading font-black text-display-xl text-content-primary">
            Intelligence at <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-violet-400 to-brand-400 bg-[length:200%_auto] animate-shimmer">Scale</span>
          </h2>
          <p className="text-lg text-content-secondary mt-4 max-w-2xl mx-auto">
            Our AI platform processes millions of requests daily, delivering measurable results across every industry we serve.
          </p>
        </AnimateIn>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 100}>
              <div className="relative group">
                {/* Card glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.05] rounded-card-lg blur-xl transition-all duration-500 -z-10" />
                
                {/* Card */}
                <div className="relative p-6 rounded-card-lg border border-surface-border bg-surface-raised/50 backdrop-blur-sm hover:border-brand-500/30 transition-all duration-300 overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
                  
                  {/* Large background number */}
                  <span className="absolute -top-4 -right-2 font-heading font-black text-[5rem] text-brand-500/[0.04] leading-none select-none pointer-events-none">
                    {stat.suffix}
                  </span>
                  
                  <div className="relative">
                    <div className="font-heading font-black text-display-md text-brand-400 mb-3">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="font-heading font-semibold text-lg text-content-primary mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-content-muted">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom trust indicator */}
        <AnimateIn delay={400}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-content-muted text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}