
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
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Impact at Scale
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our learners have transformed their careers with breakthrough achievements in cybersecurity
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
