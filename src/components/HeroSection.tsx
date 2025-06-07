
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-secondary rounded-full blur-3xl opacity-10 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Collaborate.<br />
            <span className="text-gradient">Create.</span><br />
            <span className="text-gradient">Achieve.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Your team's ideas, tasks, and knowledge in one beautiful, collaborative workspace. 
            Build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-primary text-white px-8 py-6 text-lg">
              <Plus className="mr-2 h-5 w-5" />
              Start Building
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              View Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
