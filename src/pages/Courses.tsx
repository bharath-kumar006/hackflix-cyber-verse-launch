
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "Ethical Hacking Fundamentals",
      description: "Learn the basics of ethical hacking and penetration testing",
      duration: "8 weeks",
      students: "2.1k",
      rating: 4.9,
      level: "Beginner",
      price: "Free"
    },
    {
      title: "Advanced Web Application Security",
      description: "Master web app vulnerabilities and exploitation techniques",
      duration: "12 weeks",
      students: "1.5k",
      rating: 4.8,
      level: "Advanced",
      price: "₹4,999"
    },
    {
      title: "Network Security & Defense",
      description: "Secure networks against modern cyber threats",
      duration: "10 weeks",
      students: "1.8k",
      rating: 4.9,
      level: "Intermediate",
      price: "₹3,999"
    },
    {
      title: "Mobile App Security Testing",
      description: "Find and fix vulnerabilities in mobile applications",
      duration: "6 weeks",
      students: "900",
      rating: 4.7,
      level: "Intermediate",
      price: "₹2,999"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <Navigation />
      
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Cybersecurity Courses
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Master ethical hacking with our comprehensive hands-on courses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={`${course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' : course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
                      {course.level}
                    </Badge>
                    <span className="text-2xl font-bold text-purple-400">{course.price}</span>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center gap-6 mb-6 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students} students
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Enroll Now
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

export default Courses;
