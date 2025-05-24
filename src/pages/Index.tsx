
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Shield, Target, Users, Zap, Download, Star, Globe, Code, Lock, Eye, Menu, X } from 'lucide-react';

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const [currentQuote, setCurrentQuote] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const companies = [
    "Microsoft", "Google", "Amazon", "Meta", "Apple", "Netflix", "Tesla", "IBM"
  ];

  const quotes = [
    {
      text: "Cybersecurity is the central challenge of the digital age.",
      author: "Satya Nadella",
      title: "CEO, Microsoft"
    },
    {
      text: "We see privacy as a fundamental human right… Our own information is being weaponized against us with military efficiency.",
      author: "Tim Cook",
      title: "CEO, Apple"
    },
    {
      text: "The importance of cybersecurity is only going to grow as everything goes digital.",
      author: "Sundar Pichai",
      title: "CEO, Google/Alphabet"
    }
  ];

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(quoteTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              HackingFlix
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">Courses</a>
            <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">Labs</a>
            <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">Community</a>
            <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors">Careers</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-slate-300">Already a member?</span>
            <Button variant="ghost" className="text-purple-400 hover:bg-purple-400/10 border border-purple-400/30">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg shadow-purple-500/25">
              Join for FREE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-purple-500/20">
            <div className="px-6 py-4 space-y-4">
              <a href="#" className="block text-slate-300 hover:text-purple-400">Courses</a>
              <a href="#" className="block text-slate-300 hover:text-purple-400">Labs</a>
              <a href="#" className="block text-slate-300 hover:text-purple-400">Community</a>
              <a href="#" className="block text-slate-300 hover:text-purple-400">Careers</a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full text-purple-400 hover:bg-purple-400/10 border border-purple-400/30">
                  Login
                </Button>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500">
                  Join for FREE
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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

      {/* Impact Stats */}
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
            {[
              { label: "Careers Transformed", value: "3,823", color: "from-purple-400 to-pink-400" },
              { label: "Highest CTC", value: "₹1.2 Cr", color: "from-blue-400 to-cyan-400" },
              { label: "Avg. CTC", value: "₹25 Lakhs", color: "from-green-400 to-blue-400" },
              { label: "Highest Salary Hike", value: "350%", color: "from-orange-400 to-red-400" },
              { label: "Average Rating", value: "4.9⭐", color: "from-yellow-400 to-orange-400" },
              { label: "Hiring Partners", value: "1000+", color: "from-indigo-400 to-purple-400" }
            ].map((stat, index) => (
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

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            <p className="text-xl text-slate-300">Discover what makes our cybersecurity training unique</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((feature, index) => (
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

      {/* Companies Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Our Alumni at Top Tech Companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {companies.map((company, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-purple-500/50 group-hover:scale-105">
                  <span className="text-slate-300 font-semibold group-hover:text-purple-300 transition-colors">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
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

      {/* Career Roadmap */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Confused about your career?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Kickstart your cybersecurity journey with our comprehensive roadmap. Download this free guide and discover exactly what to learn and how to land your dream job.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
              <div className="relative group">
                <div className="w-80 h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <Lock className="w-20 h-20 text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-purple-400 mb-2">Secrets of Hacking</h3>
                    <p className="text-slate-300 text-lg">Career Roadmap 2024</p>
                    <Badge className="mt-4 bg-gradient-to-r from-purple-500 to-blue-500">FREE Download</Badge>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-6 shadow-lg shadow-purple-500/25">
                  <Download className="mr-2 w-6 h-6" />
                  Download Free Guide
                </Button>
                <p className="text-slate-400 mt-4 text-sm">✓ No spam, just pure value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Trusted Worldwide by <span className="text-white">1.2 Million</span> Learners
          </h2>
          <div className="flex justify-center items-center gap-12">
            <Globe className="w-20 h-20 text-purple-400 animate-pulse" />
            <div className="text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">1,200,000+</div>
            <Eye className="w-20 h-20 text-blue-400 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-slate-950 border-t border-purple-500/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Your first step into the world of <span className="text-white">hacking</span>
            </h2>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-6 shadow-lg shadow-purple-500/25">
              Join for FREE
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="border-t border-slate-800 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  HackingFlix
                </span>
              </div>
              
              <div className="text-center">
                <div className="text-purple-400 font-bold text-xl mb-2">#LetsHack</div>
                <div className="text-slate-400">
                  Contact: hello@hackingflix.com
                </div>
              </div>
              
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
                  <Button key={social} variant="ghost" size="sm" className="text-slate-400 hover:text-purple-400 border border-slate-700 hover:border-purple-500/50">
                    {social}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12 pt-8 border-t border-slate-800">
              <p className="text-slate-500">
                © 2024 HackingFlix. All rights reserved. Building the next generation of cybersecurity professionals.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
