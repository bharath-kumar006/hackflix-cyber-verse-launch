
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play } from 'lucide-react';

const TestimonialSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="relative group">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <Play className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500">
                    Success Story
                  </Badge>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <blockquote className="text-lg md:text-xl text-slate-200 mb-6 leading-relaxed italic">
                    "HackingFlix was a complete game-changer for my cybersecurity career. The gamified learning approach made complex concepts incredibly engaging. The hands-on labs and real-world scenarios were exactly what prepared me for industry challenges. Thanks to this platform, I landed my dream job at Microsoft!"
                  </blockquote>
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <div className="text-center sm:text-left">
                      <div className="font-bold text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Rahul Sharma</div>
                      <div className="text-slate-400">Cybersecurity Engineer at Microsoft</div>
                      <div className="text-slate-500 text-sm">Non-Tech Background → ₹45 LPA</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
