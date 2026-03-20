import AnimateIn from '@/components/ui/AnimateIn'
import { Sparkles, BarChart3, Workflow, Users, Brain, Shield } from 'lucide-react'

interface ServiceItem {
  icon: React.ElementType
  title: string
  description: string
  benefit: string
}

const services: ServiceItem[] = [
  {
    icon: Sparkles,
    title: 'Content Generation',
    description: 'Create compelling, AI-powered content that resonates with your audience. From marketing copy to technical documentation, our models generate high-quality text that maintains your brand voice.',
    benefit: '10x faster content creation',
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights with advanced ML models. Surface trends, predict outcomes, and make data-driven decisions faster than ever before.',
    benefit: 'Real-time predictive analytics',
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Eliminate manual bottlenecks by automating repetitive processes. Our intelligent automation learns your workflows and optimizes them for maximum efficiency.',
    benefit: 'Reduce operational costs by 60%',
  },
  {
    icon: Users,
    title: 'Customer Engagement',
    description: 'Deliver personalized customer experiences at scale. AI-powered tools help you understand, connect, and build lasting relationships with your audience.',
    benefit: '3x improvement in response time',
  },
  {
    icon: Brain,
    title: 'Decision Support',
    description: 'Make confident strategic decisions with AI-assisted analysis. Our decision support tools synthesize complex information into clear, actionable recommendations.',
    benefit: 'Data-backed strategic decisions',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Built for scalability, security, and real-world usability. Advanced AI accessible to organizations of all sizes with enterprise-grade protection built in.',
    benefit: 'SOC 2 compliant infrastructure',
  },
]

const HEADING = 'Everything You Need to Scale with AI'
const SUBTEXT = 'By combining powerful machine learning models with user-friendly software, we help businesses reduce operational costs, improve productivity, and unlock new growth opportunities.'

export default function Services() {
  return (
    <section id="services" className="relative py-section bg-[#0f0f13] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-500/8 blur-[180px] pointer-events-none" />
      
      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '256px 256px',
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimateIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            AI Solutions
          </span>
          <h2 className="font-heading font-black text-display-lg text-content-primary mb-4">
            {HEADING}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-content-secondary leading-relaxed">
            {SUBTEXT}
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <AnimateIn key={svc.title} delay={i * 80}>
              <div className="group relative h-full p-8 rounded-card-lg border border-white/8 bg-white/[0.03] hover:border-brand-500/40 hover:bg-white/[0.06] transition-all duration-300 ease-expo-out overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Inner glow on hover */}
                <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/[0.03] transition-colors duration-500 rounded-card-lg" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-card bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                    <svc.icon className="w-7 h-7 text-brand-400" />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-content-primary mb-3">
                    {svc.title}
                  </h3>
                  
                  <p className="text-content-secondary leading-relaxed mb-6">
                    {svc.description}
                  </p>
                  
                  {/* Benefit tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-brand-500/10 border border-brand-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span className="text-sm text-brand-400 font-medium">{svc.benefit}</span>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}