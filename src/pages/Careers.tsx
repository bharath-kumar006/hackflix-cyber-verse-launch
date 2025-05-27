
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  const jobs = [
    {
      title: "Senior Penetration Tester",
      company: "CyberSec Solutions",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹15-25 LPA",
      experience: "3-5 years",
      skills: ["Ethical Hacking", "Web Security", "Network Security"]
    },
    {
      title: "Security Analyst",
      company: "InfoTech Corp",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "₹8-12 LPA",
      experience: "1-3 years",
      skills: ["SIEM", "Incident Response", "Threat Analysis"]
    },
    {
      title: "Cybersecurity Consultant",
      company: "SecureGuard",
      location: "Delhi, India",
      type: "Contract",
      salary: "₹20-30 LPA",
      experience: "5+ years",
      skills: ["Risk Assessment", "Compliance", "Security Architecture"]
    },
    {
      title: "Junior Ethical Hacker",
      company: "HackDefense",
      location: "Remote",
      type: "Full-time",
      salary: "₹5-8 LPA",
      experience: "0-2 years",
      skills: ["Bug Bounty", "Web Testing", "Mobile Security"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Career Opportunities
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Find your dream job in cybersecurity with our industry connections
            </p>
          </div>
          
          <div className="grid gap-6 mb-16">
            {jobs.map((job, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2 text-white">{job.title}</h3>
                      <p className="text-purple-400 text-lg mb-4">{job.company}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-slate-300">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-slate-300">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-slate-300">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-purple-500/20 text-purple-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <p className="text-slate-400">Experience: {job.experience}</p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="border-purple-400/30 text-purple-300 hover:bg-purple-400/10">
                        Save Job
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Not Finding What You're Looking For?</h2>
            <p className="text-slate-300 mb-8">Upload your resume and we'll match you with relevant opportunities</p>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg px-8 py-6">
              Upload Resume
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Careers;
