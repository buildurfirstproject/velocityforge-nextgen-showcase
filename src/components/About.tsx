import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Building2, Users, Award, TrendingUp } from "lucide-react"

export const About = () => {
  const stats = [
    { icon: Building2, value: "500+", label: "Projects Delivered" },
    { icon: Users, value: "150+", label: "Happy Clients" },
    { icon: Award, value: "98%", label: "Success Rate" },
    { icon: TrendingUp, value: "5x", label: "Growth Speed" },
  ]

  return (
    <Section id="about" className="bg-gradient-hero">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Content */}
        <div className="space-y-8 animate-slide-in-left">
          <div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              About VelocityForge
            </h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              Forging the Future of 
              <span className="text-gradient-primary"> Digital Innovation</span>
            </h3>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              At VelocityForge, we believe that the fastest path to success is through 
              intelligent automation and bold innovation. Founded by a team of visionary 
              developers and designers, we've made it our mission to transform how 
              businesses operate in the digital age.
            </p>
            <p>
              Our expertise spans across AI automation, stunning web design, cutting-edge 
              mobile applications, and sophisticated workflow automation using n8n. 
              We don't just build solutions – we forge digital experiences that propel 
              your business forward at lightning speed.
            </p>
            <p>
              Every project we undertake is driven by three core principles: 
              <span className="text-gradient-accent font-semibold"> bold innovation</span>, 
              <span className="text-gradient-primary font-semibold"> smart automation</span>, 
              and <span className="text-gradient-accent font-semibold">rapid delivery</span>. 
              This philosophy has helped hundreds of companies accelerate their growth 
              and achieve remarkable results.
            </p>
          </div>
        </div>

        {/* Right side - Stats */}
        <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-white/10 p-6 text-center hover-lift group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-primary rounded-lg glow-primary group-hover:glow-accent transition-all">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gradient-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}