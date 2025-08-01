import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Shield, Zap, Scale, Clock, Target, Lightbulb } from "lucide-react"

export const WhyUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "We deliver projects at unprecedented speed without compromising on quality. Our streamlined processes ensure rapid development and deployment.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your data and applications are protected with industry-leading security measures and best practices that exceed compliance standards.",
    },
    {
      icon: Scale,
      title: "Infinitely Scalable",
      description: "Our solutions grow with your business. Built on robust architectures that handle everything from startup to enterprise scale.",
    },
    {
      icon: Clock,
      title: "Always On Time",
      description: "We pride ourselves on meeting deadlines. Our project management ensures transparent communication and timely delivery.",
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "Every solution is designed with your business goals in mind. We measure success by your growth and achievement.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give you a competitive advantage.",
    },
  ]

  return (
    <Section id="why-us" className="bg-gradient-hero">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          Why Choose VelocityForge
        </h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-6">
          Built for 
          <span className="text-gradient-primary"> Speed & Excellence</span>
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We combine technical expertise with business acumen to deliver solutions 
          that not only work flawlessly but drive real results for your organization.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <Card 
            key={index}
            className="bg-gradient-card border-white/10 p-6 hover-lift group text-center relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-primary rounded-full glow-primary group-hover:glow-accent group-hover:scale-110 transition-all">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient-primary transition-all">
                {reason.title}
              </h4>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom CTA section */}
      <div className="mt-20 text-center animate-fade-in">
        <div className="bg-gradient-card border border-white/10 rounded-2xl p-8 backdrop-glass">
          <h4 className="text-3xl font-bold mb-4">
            Ready to <span className="text-gradient-primary">Accelerate</span> Your Business?
          </h4>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their operations with VelocityForge. 
            Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all glow-primary">
              Start Your Project
            </button>
            <button className="backdrop-glass border border-white/20 text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-white/5 transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}