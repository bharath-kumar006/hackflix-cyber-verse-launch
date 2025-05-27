
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-slate-950 border-t border-purple-500/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Your first step into the world of <span className="text-white">hacking</span>
          </h2>
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-6 shadow-lg shadow-purple-500/25" asChild>
            <Link to="/signup">
              Join for FREE
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
        
        <div className="border-t border-slate-800 pt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                HackingFlix
              </span>
            </Link>
            
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
  );
};

export default Footer;
