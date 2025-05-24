
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
  );
};

export default Navigation;
