
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  const stats = [
    { label: "Careers Transformed", value: "3,823", color: "from-purple-400 to-pink-400" },
    { label: "Highest CTC", value: "₹1.2 Cr", color: "from-blue-400 to-cyan-400" },
    { label: "Avg. CTC", value: "₹25 Lakhs", color: "from-green-400 to-blue-400" },
    { label: "Highest Salary Hike", value: "350%", color: "from-orange-400 to-red-400" },
    { label: "Average Rating", value: "4.9⭐", color: "from-yellow-400 to-orange-400" },
    { label: "Hiring Partners", value: "1000+", color: "from-indigo-400 to-purple-400" }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="particle-bg opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 perspective-container">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent neon-glow tilt-effect">
            Impact at Scale
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our learners have transformed their careers with breakthrough achievements in <span className="text-cyan-400">cybersecurity</span>
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="cyber-card group cursor-pointer transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 hologram-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 neon-glow relative z-10`}>
                  {stat.value}
                </div>
                <div className="text-slate-300 text-sm relative z-10">{stat.label}</div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent group-hover:via-cyan-400 transition-colors duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
