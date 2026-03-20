import Link from 'next/link'
import { Mail, MapPin, Twitter, Linkedin, Github } from 'lucide-react'

const BRAND = {
  name:    'Zentrix AI',
  tagline: 'AI-Powered Intelligence for Tomorrow\'s Business',
  email:   'jiachwen99@gmail.com',
  description: 'We are an all-in-one AI technology company that builds intelligent tools designed to simplify work, automate processes, and accelerate digital transformation.',
}

const links = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Changelog', href: '#changelog' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Documentation', href: '#docs' },
    { label: 'API Reference', href: '#api' },
    { label: 'Guides', href: '#guides' },
    { label: 'Support', href: '#support' },
  ],
}

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
]

const socials = [
  { label: 'Twitter', href: 'https://twitter.com/zentrixai', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/zentrixai', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/zentrixai', icon: Github },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0f0f13] border-t border-[#2a2a3a]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/5 blur-[150px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <img 
                  src="https://u5ft5besqtymo1lf.public.blob.vercel-storage.com/logos/1773986969004-ai-artificial-intelligence-improves-emai-600nw-2655586379.webp" 
                  alt="Zentrix AI logo" 
                  className="h-10 w-auto object-contain" 
                />
              </div>
            </Link>
            <p className="mt-4 text-sm text-[#8b8ba7] max-w-xs leading-relaxed">
              {BRAND.description}
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#17171f] border border-[#2a2a3a] flex items-center justify-center text-[#8b8ba7] hover:text-brand-400 hover:border-brand-500/30 hover:bg-brand-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-heading font-semibold text-[#f1f1f5] text-sm uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {links.product.map((l) => (
                <li key={l.label}>
                  <a 
                    href={l.href} 
                    className="text-sm text-[#8b8ba7] hover:text-brand-400 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-heading font-semibold text-[#f1f1f5] text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {links.company.map((l) => (
                <li key={l.label}>
                  <a 
                    href={l.href} 
                    className="text-sm text-[#8b8ba7] hover:text-brand-400 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="font-heading font-semibold text-[#f1f1f5] text-sm uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {links.resources.map((l) => (
                <li key={l.label}>
                  <a 
                    href={l.href} 
                    className="text-sm text-[#8b8ba7] hover:text-brand-400 transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2a2a3a] to-transparent" />

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-[#5a5a72]">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a 
                href={`mailto:${BRAND.email}`} 
                className="hover:text-brand-400 transition-colors"
              >
                {BRAND.email}
              </a>
            </div>
            <span className="hidden md:block text-[#2a2a3a]">|</span>
            <p>AI Technology Platform</p>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            {legal.map((l) => (
              <Link 
                key={l.href} 
                href={l.href} 
                className="text-sm text-[#5a5a72] hover:text-brand-400 transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-[#5a5a72]">
          © {year} {BRAND.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}