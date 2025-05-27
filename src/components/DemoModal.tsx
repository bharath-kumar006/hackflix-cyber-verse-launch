
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play, X } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl bg-slate-800 border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">HackingFlix Demo</DialogTitle>
        </DialogHeader>
        
        <div className="aspect-video bg-slate-900 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
            <h3 className="text-white text-xl mb-2">Demo Video</h3>
            <p className="text-slate-300 mb-4">
              Watch how HackingFlix transforms careers in cybersecurity
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
              <Play className="w-4 h-4 mr-2" />
              Play Demo
            </Button>
          </div>
        </div>
        
        <div className="text-center pt-4">
          <p className="text-slate-300">
            See how our students land high-paying cybersecurity jobs
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
