import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Rocket } from "lucide-react"
import heroBackground from "@/assets/hero-background.jpg"

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-primary px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <Zap className="w-4 h-4" />
          <span className="text-primary-foreground">Leading Tech Innovation</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-gradient-primary">Velocity</span>
          <span className="text-foreground">Forge</span>
        </h1>

        {/* Slogan */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in font-light">
          <span className="text-gradient-accent">Build bold</span>, 
          <span className="text-gradient-primary"> automate smart</span>, 
          <span className="text-gradient-accent"> launch fast</span>.
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in leading-relaxed">
          We craft cutting-edge solutions that transform ideas into powerful digital experiences. 
          From AI automation to stunning web applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button variant="hero" size="xl" className="group">
            Let's Build Together
            <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="xl">
            View Our Work
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}