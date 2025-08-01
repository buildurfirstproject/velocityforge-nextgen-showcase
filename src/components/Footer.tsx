import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    Services: [
      { name: "AI Automation", href: "#" },
      { name: "Website Design", href: "#" },
      { name: "Mobile Apps", href: "#" },
      { name: "Workflow Automation", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Services", href: "#services" },
      { name: "Why Choose Us", href: "#why-us" },
      { name: "Contact", href: "#contact" },
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@velocityforge.com", label: "Email" },
  ]

  return (
    <footer className="relative bg-gradient-hero border-t border-white/10">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gradient-primary mb-3">
                VelocityForge
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Build bold, automate smart, launch fast. We forge the future of 
                digital innovation through cutting-edge technology and exceptional design.
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-card/50 border border-white/10 rounded-lg hover-lift group backdrop-blur-sm"
                >
                  <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-gradient-card border border-white/10 rounded-2xl p-6">
            <div className="text-center space-y-4">
              <h4 className="text-xl font-bold text-foreground">
                Stay Updated with VelocityForge
              </h4>
              <p className="text-muted-foreground">
                Get the latest insights on AI, automation, and digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-background/50 border border-white/20 rounded-lg px-4 py-2 text-foreground focus:border-primary focus:outline-none"
                />
                <Button variant="hero" className="shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 VelocityForge. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="group"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}