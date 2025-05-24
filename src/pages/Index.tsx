
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Shield, Target, Users, Zap, Download, Star, Globe, Code, Lock, Eye } from 'lucide-react';

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const [currentQuote, setCurrentQuote] = useState(0);
  
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              HackingFlix
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-300">Already a member?</span>
            <Button variant="ghost" className="text-green-400 hover:bg-green-400/10">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
              Join for FREE
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Tech companies, Governments, Banks, LEA, all need Hackers
            </p>
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-lg px-8 py-6">
              Join for FREE
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <div className="text-slate-400">
            <span className="text-2xl font-bold text-green-400">1.2M</span> Learners Worldwide
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Impact at Scale</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our learners have transformed their lives with groundbreaking career advancements in cybersecurity.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { label: "Careers Transformed", value: "3,823", color: "text-green-400" },
              { label: "Highest CTC", value: "₹1.2 Cr", color: "text-blue-400" },
              { label: "Avg. CTC", value: "₹25 Lakhs", color: "text-purple-400" },
              { label: "Highest Salary Hike", value: "350%", color: "text-red-400" },
              { label: "Average Rating", value: "4.9⭐", color: "text-yellow-400" },
              { label: "Hiring Partners", value: "1000+", color: "text-indigo-400" }
            ].map((stat, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Building Next-Gen Hackers!</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Hack Real-World Systems",
                description: "Practice on actual vulnerable systems in controlled environments"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Live Attack Simulations",
                description: "Experience real-time cyber attacks and learn to defend"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Hands-on Hacking Labs",
                description: "Interactive labs with cutting-edge tools and techniques"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Job-Ready Curriculum",
                description: "Industry-aligned content that gets you hired faster"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Alumni at Top Tech Companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companies.map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-all duration-300">
                  <span className="text-slate-300 font-semibold">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-slate-300">Discover what makes our programs unique</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Self-paced video content",
                description: "Master new skills on your schedule with our flexible, self-paced video content."
              },
              {
                title: "Support sessions with Mentors",
                description: "Overcome challenges fast with dedicated mentor support sessions."
              },
              {
                title: "Gamified approach",
                description: "Gain practical skills through our gamified approach for real results."
              },
              {
                title: "Network of 1000+ learners",
                description: "Tap into our vast network of learners, enhancing your learning experience."
              },
              {
                title: "100% Job Assurance",
                description: "Get all the support to crack your dream tech job."
              },
              {
                title: "Industry Recognition",
                description: "Certificates recognized by top cybersecurity companies worldwide."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{item.title}</h3>
                  <p className="text-slate-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Famous Quotes */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="min-h-[200px] flex items-center justify-center">
              <div key={currentQuote} className="animate-fade-in">
                <blockquote className="text-2xl md:text-3xl font-light mb-8 text-slate-200">
                  "{quotes[currentQuote].text}"
                </blockquote>
                <cite className="text-green-400 font-semibold">
                  {quotes[currentQuote].author}
                  <span className="text-slate-400 block">{quotes[currentQuote].title}</span>
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                      <Play className="w-16 h-16 text-green-400" />
                    </div>
                    <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-500">
                      Success Story
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg text-slate-200 mb-6">
                      "Joining this gamified learning platform was a game-changer for me. The interactive challenges and real-world scenarios kept me engaged and made complex concepts easy to grasp. Thanks to this platform, I cracked my dream job at Microsoft!"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="font-semibold text-green-400">Rahul Sharma</div>
                        <div className="text-slate-400">Cybersecurity Engineer</div>
                        <div className="text-slate-400">Non-Tech Background → Microsoft</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Roadmap Download */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Confused about career?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Kickstart your cybersecurity career with a clear, step-by-step roadmap. Download this free guide and discover exactly what to learn and how to land your dream job.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
              <div className="w-64 h-80 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Lock className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-400">Secrets of Hacking</h3>
                  <p className="text-slate-300">Career Roadmap</p>
                </div>
              </div>
              <div>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  <Download className="mr-2 w-5 h-5" />
                  Download Free Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Trusted Worldwide by <span className="text-green-400">1.2 Million</span> Learners
          </h2>
          <div className="flex justify-center items-center gap-8">
            <Globe className="w-16 h-16 text-blue-400 animate-pulse" />
            <div className="text-6xl font-bold text-green-400">1,200,000+</div>
            <Eye className="w-16 h-16 text-purple-400 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Your first step into the world of <span className="text-green-400">hacking</span>
            </h2>
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-lg px-8 py-6">
              Join for FREE
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="border-t border-slate-800 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  HackingFlix
                </span>
              </div>
              
              <div className="text-center">
                <div className="text-green-400 font-semibold text-lg mb-2">#LetsHack</div>
                <div className="text-slate-400">
                  Contact: hello@hackingflix.com
                </div>
              </div>
              
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
                  <Button key={social} variant="ghost" size="sm" className="text-slate-400 hover:text-green-400">
                    {social}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-8 pt-8 border-t border-slate-800">
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
