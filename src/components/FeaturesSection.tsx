
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
    <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          <p className="text-xl text-slate-300">Discover what makes our cybersecurity training unique</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
