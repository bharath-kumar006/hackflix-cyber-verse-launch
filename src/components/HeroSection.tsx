
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Zap, Shield, Target } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Become Top 1% Hacker";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden perspective-container">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="particle-bg"></div>
      <div className="matrix-rain opacity-10"></div>
      
      {/* Floating 3D Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-xl float-animation-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full blur-xl float-animation-slow"></div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 right-10 w-16 h-16 border-2 border-purple-400/30 rotate-45 float-animation cyberpunk-border"></div>
      <div className="absolute bottom-1/3 left-20 w-12 h-12 border-2 border-cyan-400/30 rotate-12 float-animation-delayed cyberpunk-border"></div>
      
      {/* Holographic Cards */}
      <div className="absolute top-1/3 left-10 p-4 hologram-effect rounded-lg float-animation">
        <Shield className="w-8 h-8 text-purple-400" />
      </div>
      <div className="absolute top-1/2 right-16 p-4 hologram-effect rounded-lg float-animation-delayed">
        <Target className="w-8 h-8 text-cyan-400" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 p-4 hologram-effect rounded-lg float-animation-slow">
        <Zap className="w-8 h-8 text-blue-400" />
      </div>

      <div className="container mx-auto text-center relative z-10 depth-layer-3">
        <div className="mb-12">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 cyberpunk-border">
            🚀 Join 1.2M+ Learners Worldwide
          </Badge>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight neon-glow perspective-container tilt-effect">
            <span className="glitch-effect" data-text={typedText}>
              {typedText}
            </span>
            <span className="animate-pulse text-purple-400">|</span>
          </h1>
          
          <div className="depth-layer-2 mb-8">
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Tech companies, Governments, Banks, LEA - everyone needs skilled ethical hackers. 
              Start your journey into cybersecurity with <span className="text-cyan-400 neon-glow">gamified learning</span>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center depth-layer-1">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-6 shadow-lg shadow-purple-500/25 cyber-card border-0 transform hover:scale-105 transition-all duration-300">
              Start Learning Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400/30 text-purple-300 hover:bg-purple-400/10 text-lg px-8 py-6 cyber-card transform hover:scale-105 transition-all duration-300">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Additional Depth Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
