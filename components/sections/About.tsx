import AnimateIn from '@/components/ui/AnimateIn'
import { cn } from '@/lib/utils'

const CONTENT = {
  label: 'About Zentrix AI',
  heading: 'AI-Powered Intelligence for Tomorrow\'s Business',
  paragraphs: [
    'We are an all-in-one AI technology company that builds intelligent tools designed to simplify work, automate processes, and accelerate digital transformation.',
    'By combining powerful machine learning models with user-friendly software, we help businesses reduce operational costs, improve productivity, and unlock new growth opportunities.',
  ],
  capabilities: [
    { icon: '⚡', title: 'Content Generation', desc: 'AI-powered content creation at scale' },
    { icon: '📊', title: 'Data Analysis', desc: 'Transform raw data into actionable insights' },
    { icon: '🔄', title: 'Workflow Automation', desc: 'Streamline operations intelligently' },
    { icon: '💬', title: 'Customer Engagement', desc: 'Personalized experiences that drive loyalty' },
    { icon: '🎯', title: 'Decision Support', desc: 'Data-driven strategic guidance' },
  ],
  values: [
    'Scalable solutions designed for growth',
    'Enterprise-grade security and compliance',
    'Real-world usability for all organizations',
    'Accessible AI for organizations of all sizes',
  ],
  stats: [
    { value: '10+', label: 'Years of Innovation' },
    { value: '500+', label: 'Enterprise Clients' },
    { value: '99.9%', label: 'Uptime Reliability' },
  ],
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      
      {/* Dot grid texture */}
      <div className="absolute inset-0 opacity-[0.15]"
           style={{
             backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
           }} />
      
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] rounded-full bg-sky-500/8 blur-[150px] pointer-events-none" />

      <div className="relative z-10 py-section-lg">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <AnimateIn>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                {CONTENT.label}
              </span>
            </AnimateIn>

            <AnimateIn delay={100}>
              <h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-tight text-white mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-200 to-white bg-[length:200%_auto] animate-shimmer">
                  {CONTENT.heading}
                </span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={200}>
              <div className="space-y-5">
                <p className="text-lg text-slate-300 leading-relaxed">
                  {CONTENT.paragraphs[0]}
                </p>
                <p className="text-base text-slate-400 leading-relaxed">
                  {CONTENT.paragraphs[1]}
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Stats row */}
          <AnimateIn delay={300}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {CONTENT.stats.map((stat, i) => (
                <div key={stat.label} className="relative group">
                  <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/5 rounded-2xl blur-xl transition-all duration-500" />
                  <div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-sky-500/30 transition-all duration-300">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="font-heading font-black text-5xl text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Capabilities */}
            <AnimateIn direction="left">
              <div>
                <h3 className="font-heading font-bold text-2xl text-white mb-8">
                  Our AI Capabilities
                </h3>
                <div className="space-y-4">
                  {CONTENT.capabilities.map((cap, i) => (
                    <div key={cap.title} className="group relative">
                      <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/5 rounded-xl blur-md transition-all duration-500" />
                      <div className="relative p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-sky-500/30 hover:bg-white/[0.04] transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-2xl shrink-0 group-hover:bg-sky-500/20 transition-colors duration-300">
                            {cap.icon}
                          </div>
                          <div>
                            <h4 className="font-heading font-semibold text-lg text-white mb-1">
                              {cap.title}
                            </h4>
                            <p className="text-sm text-slate-400">{cap.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Right: Values + Visual */}
            <AnimateIn direction="right">
              <div className="space-y-8">
                {/* Visual element */}
                <div className="relative">
                  <div className="absolute inset-0 bg-sky-500/20 blur-[80px] rounded-full" />
                  <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
                    <div className="text-center">
                      <div className="font-heading font-black text-7xl text-white/90 mb-2">
                        AI
                      </div>
                      <div className="text-sm text-slate-400 tracking-widest uppercase">Ecosystem</div>
                      <div className="mt-6 flex items-center justify-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                        <span className="text-xs text-sky-400">Powered by Advanced ML Models</span>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 border border-sky-500/20 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 border border-sky-500/10 rounded-full" />
                  </div>
                </div>

                {/* Values */}
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white mb-6">
                    Our Core Values
                  </h3>
                  <div className="space-y-3">
                    {CONTENT.values.map((value, i) => (
                      <div key={value} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-slate-300">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="group relative inline-flex items-center gap-2 px-8 py-4 font-body font-semibold bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-sky-400/0 group-hover:bg-sky-400/20 blur-xl rounded-xl transition-all duration-300" />
                    <span className="relative">Start Free Trial</span>
                    <svg className="w-4 h-4 relative transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
    </section>
  )
}