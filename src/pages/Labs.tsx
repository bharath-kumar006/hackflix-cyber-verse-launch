
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Target, Shield } from 'lucide-react';

const Labs = () => {
  const labs = [
    {
      title: "SQL Injection Challenge",
      description: "Practice SQL injection techniques on vulnerable applications",
      difficulty: "Easy",
      category: "Web Security",
      completions: "3.2k",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Buffer Overflow Exploitation",
      description: "Learn to exploit buffer overflows in C applications",
      difficulty: "Hard",
      category: "Binary Exploitation",
      completions: "800",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Cross-Site Scripting (XSS)",
      description: "Master XSS attacks and prevention techniques",
      difficulty: "Medium",
      category: "Web Security",
      completions: "2.1k",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Privilege Escalation",
      description: "Practice escalating privileges in Linux systems",
      difficulty: "Medium",
      category: "System Security",
      completions: "1.5k",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Hands-on Labs
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Practice real-world hacking scenarios in safe, controlled environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {labs.map((lab, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-purple-400">
                      {lab.icon}
                    </div>
                    <Badge className={`${lab.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' : lab.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
                      {lab.difficulty}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {lab.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-4">
                    {lab.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-slate-400">{lab.category}</span>
                    <span className="text-sm text-slate-400">{lab.completions} completed</span>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    <Play className="w-4 h-4 mr-2" />
                    Start Lab
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Labs;
