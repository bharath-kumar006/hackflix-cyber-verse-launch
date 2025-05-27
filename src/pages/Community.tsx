
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, Trophy, BookOpen } from 'lucide-react';

const Community = () => {
  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Global Network",
      description: "Connect with 1.2M+ ethical hackers worldwide",
      action: "Join Now"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Discussion Forums",
      description: "Share knowledge and get help from experts",
      action: "Start Discussion"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "Competitions",
      description: "Participate in CTF challenges and win prizes",
      action: "View Challenges"
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Resource Hub",
      description: "Access exclusive tools and learning materials",
      action: "Explore Resources"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Join Our Community
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect, learn, and grow with fellow cybersecurity enthusiasts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    {feature.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Connect?</h2>
            <p className="text-slate-300 mb-8">Join thousands of hackers already part of our community</p>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-6">
              Join Discord Community
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Community;
