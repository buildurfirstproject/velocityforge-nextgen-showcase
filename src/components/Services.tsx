import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Globe, Smartphone, Workflow, ArrowRight } from "lucide-react"

export const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Automation",
      description: "Intelligent automation solutions that learn, adapt, and optimize your business processes in real-time.",
      features: ["Machine Learning Integration", "Process Automation", "Predictive Analytics", "Smart Decision Making"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Website Design",
      description: "Stunning, responsive websites that captivate users and convert visitors into customers.",
      features: ["Modern UI/UX Design", "Responsive Development", "SEO Optimization", "Performance Focused"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-Platform Solutions", "User-Centric Design", "App Store Optimization"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Workflow,
      title: "n8n Workflow Automation",
      description: "Seamless workflow automation that connects your tools and eliminates repetitive tasks.",
      features: ["Custom Workflows", "API Integrations", "Data Synchronization", "Process Optimization"],
      gradient: "from-orange-500 to-red-500"
    },
  ]

  return (
    <Section id="services">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
          Our Services
        </h2>
        <h3 className="text-4xl lg:text-5xl font-bold mb-6">
          Powerful Solutions for 
          <span className="text-gradient-primary"> Modern Businesses</span>
        </h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We offer comprehensive digital services designed to accelerate your business growth 
          through innovation and cutting-edge technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <Card 
            key={index}
            className="bg-gradient-card border-white/10 p-8 hover-lift group relative overflow-hidden"
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${service.gradient} glow-primary mr-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-foreground">
                  {service.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3 glow-accent`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" className="group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}