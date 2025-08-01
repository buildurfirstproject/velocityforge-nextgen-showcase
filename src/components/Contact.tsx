import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Send } from "lucide-react"

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@velocityforge.com",
      action: "mailto:hello@velocityforge.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-FORGE",
      action: "tel:+15551234673"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "San Francisco, CA",
      action: "#"
    },
  ]

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <Section id="contact">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          Get In Touch
        </h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-6">
          Let's Start Building 
          <span className="text-gradient-primary"> Something Amazing</span>
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to transform your business? We'd love to hear about your project 
          and explore how we can help you achieve your goals.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <Card className="bg-gradient-card border-white/10 p-8 animate-slide-in-left">
          <h4 className="text-2xl font-bold mb-6 text-gradient-primary">
            Send us a message
          </h4>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  First Name
                </label>
                <Input 
                  placeholder="John" 
                  className="bg-background/50 border-white/20 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Last Name
                </label>
                <Input 
                  placeholder="Doe" 
                  className="bg-background/50 border-white/20 focus:border-primary"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input 
                type="email" 
                placeholder="john@example.com" 
                className="bg-background/50 border-white/20 focus:border-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Project Type
              </label>
              <select className="w-full bg-background/50 border border-white/20 rounded-lg px-3 py-2 text-foreground focus:border-primary focus:outline-none">
                <option value="">Select a service</option>
                <option value="ai">AI Automation</option>
                <option value="web">Website Design</option>
                <option value="mobile">Mobile App Development</option>
                <option value="workflow">n8n Workflow Automation</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea 
                placeholder="Tell us about your project..." 
                rows={5}
                className="bg-background/50 border-white/20 focus:border-primary resize-none"
              />
            </div>
            
            <Button variant="hero" size="lg" className="w-full group">
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </Card>

        {/* Contact Info */}
        <div className="space-y-8 animate-slide-in-right">
          <div>
            <h4 className="text-2xl font-bold mb-6">
              Get in touch with us
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you have a specific project in mind or just want to explore 
              possibilities, we're here to help. Our team is ready to discuss your 
              requirements and provide expert guidance.
            </p>
          </div>

          {/* Contact methods */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <Card key={index} className="bg-gradient-card border-white/10 p-4 hover-lift">
                <a href={item.action} className="flex items-center space-x-4 group">
                  <div className="p-3 bg-gradient-primary rounded-lg glow-primary group-hover:glow-accent transition-all">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground">{item.title}</h5>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          {/* Social links */}
          <div>
            <h5 className="font-semibold text-foreground mb-4">Follow us</h5>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 bg-gradient-card border border-white/10 rounded-lg hover-lift group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}