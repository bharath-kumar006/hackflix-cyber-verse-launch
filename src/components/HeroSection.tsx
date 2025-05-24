
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play } from 'lucide-react';

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
    <section className="pt-32 pb-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl transform -rotate-12 scale-150"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-12">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2">
            🚀 Join 1.2M+ Learners Worldwide
          </Badge>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            {typedText}
            <span className="animate-pulse text-purple-400">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Tech companies, Governments, Banks, LEA - everyone needs skilled ethical hackers. 
            Start your journey into cybersecurity with gamified learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-6 shadow-lg shadow-purple-500/25">
              Start Learning Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-400/30 text-purple-300 hover:bg-purple-400/10 text-lg px-8 py-6">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
