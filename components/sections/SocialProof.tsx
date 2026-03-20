import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const CONTENT = {
  badge: 'Trusted by Industry Leaders',
  clients: [
    'TechFlow Inc',
    'DataStream Corp',
    'CloudNine Solutions',
    'InnovateX Labs',
    'Nexus Digital',
    'ScaleUp Systems',
    'QuantumLeap AI',
    'SynapseTech',
  ],
  testimonials: [
    {
      quote:
        'Zentrix AI transformed our workflow. We reduced content production time by 70% while maintaining quality. The automation capabilities are genuinely game-changing.',
      author: 'Sarah Chen',
      role: 'VP of Operations, TechFlow Inc',
      metric: '70% faster',
    },
    {
      quote:
        'The data analysis tools gave us insights we never knew existed. Our decision-making cycle went from weeks to days. This is the AI platform we have been waiting for.',
      author: 'Marcus Rodriguez',
      role: 'Chief Data Officer, DataStream Corp',
      metric: '3x faster decisions',
    },
    {
      quote:
        'Customer engagement scores improved dramatically after integrating Zentrix. The predictive capabilities feel almost like having an extra team member.',
      author: 'Emily Watson',
      role: 'Head of CX, CloudNine Solutions',
      metric: '45% engagement boost',
    },
    {
      quote:
        'Scalability was our biggest concern. Zentrix handled our growth seamlessly. From startup to enterprise-level operations without missing a beat.',
      author: 'James Park',
      role: 'CTO, ScaleUp Systems',
      metric: '10x scaling',
    },
  ],
}

export default function SocialProof() {
  return (
    <section className="py-section bg-[#0f0f13] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/[0.06] blur-[180px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-violet-500/[0.04] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
            {CONTENT.badge}
          </span>
          <h2 className="font-heading font-black text-display-xl text-content-primary text-center mb-4">
            Powering the Future of{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-violet-400 to-brand-400 bg-[length:200%_auto] animate-shimmer">
              Work
            </span>
          </h2>
          <p className="text-lg text-content-secondary max-w-2xl mx-auto">
            Join thousands of organizations leveraging Zentrix AI to automate processes, unlock insights, and accelerate digital transformation.
          </p>
        </AnimateIn>

        {/* Client Marquee */}
        <div className="relative mb-24 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0f0f13] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0f0f13] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-6 animate-marquee w-max">
            {[...CONTENT.clients, ...CONTENT.clients].map((name, i) => (
              <div
                key={i}
                className={cn(
                  'whitespace-nowrap px-6 py-3 rounded-card',
                  'border border-surface-border bg-surface-raised',
                  'text-content-secondary font-medium text-sm',
                  'hover:border-brand-500/40 hover:text-brand-400 transition-colors duration-300'
                )}
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: '10,000+', label: 'Active Users' },
            { value: '500+', label: 'Enterprise Clients' },
            { value: '2.4M+', label: 'Tasks Automated' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 80}>
              <div className="text-center p-6 rounded-card-lg border border-surface-border bg-surface-raised">
                <div className="font-heading font-black text-display-lg text-brand-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-content-muted">{stat.label}</div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONTENT.testimonials.map((t, i) => (
            <AnimateIn key={i} delay={i * 120}>
              <div className="group relative h-full p-8 rounded-card-lg border border-surface-border bg-surface-raised hover:border-brand-500/50 transition-all duration-300 overflow-hidden">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-500 rounded-card-lg" />

                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Metric badge */}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold">
                    <span className="text-green-400">↑</span>
                    {t.metric}
                  </span>
                </div>

                <div className="relative">
                  {/* Quote icon */}
                  <div className="text-4xl text-brand-500/20 font-serif leading-none mb-4">&ldquo;</div>

                  <p className="text-content-primary leading-relaxed mb-6 text-lg font-light">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-500/20 to-violet-500/20 border border-brand-500/20 flex items-center justify-center">
                      <span className="text-brand-400 font-heading font-bold text-lg">
                        {t.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-content-primary">{t.author}</div>
                      <div className="text-sm text-content-muted">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <AnimateIn delay={400} className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-card-lg border border-surface-border bg-surface-raised">
            <p className="text-content-secondary">
              Ready to transform your business with AI?
            </p>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-brand-500 text-content-inverse font-medium hover:bg-brand-700 transition-colors"
            >
              <span className="relative z-10">Start Free Trial</span>
              <span className="relative z-10">→</span>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}