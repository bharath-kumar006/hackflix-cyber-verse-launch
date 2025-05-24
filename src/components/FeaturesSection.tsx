
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Zap, Shield, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Real-World Hacking",
      description: "Practice on actual vulnerable systems in safe, controlled environments"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Live Simulations",
      description: "Experience real-time cyber attacks and learn advanced defense strategies"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Hands-on Labs",
      description: "Interactive labs with cutting-edge tools used by industry professionals"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Job Guarantee",
      description: "100% job assurance with our industry-aligned curriculum and placement support"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="matrix-rain opacity-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 border border-purple-400/30 rounded-lg rotate-45 float-animation cyberpunk-border"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border border-cyan-400/30 rounded-full float-animation-delayed cyberpunk-border"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 perspective-container">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent neon-glow tilt-effect">
            Why Choose Us?
          </h2>
          <p className="text-xl text-slate-300">Discover what makes our <span className="text-purple-400">cybersecurity training</span> unique</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="cyber-card group perspective-container cursor-pointer">
              <CardContent className="p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 hologram-effect opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center relative z-10 float-animation-slow">
                  <div className="p-4 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 group-hover:from-purple-400/30 group-hover:to-blue-400/30 transition-colors duration-300 cyberpunk-border">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white relative z-10 neon-glow">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed relative z-10">{feature.description}</p>
                
                {/* Scan line effect */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
