import React, { useState, useEffect } from 'react';
import { Clock, Users, AlertCircle } from 'lucide-react';

export default function SlotCounter() {
  const [timeLeft, setTimeLeft] = useState('');
  const [slotsFilled, setSlotsFilled] = useState(87); // Initial simulated value
  const totalSlots = 100;

  useEffect(() => {
    // Simulate live slot filling
    const interval = setInterval(() => {
      setSlotsFilled(prev => {
        if (prev >= 100) return 100;
        // Randomly add a slot every now and then
        return Math.random() > 0.7 ? prev + 1 : prev;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date();
      target.setHours(20, 0, 0, 0); // 8:00 PM

      if (now > target) {
        target.setDate(target.getDate() + 1);
      }

      const diff = target.getTime() - now.getTime();
      
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${hours.toString().padStart(2, '0')}h : ${minutes.toString().padStart(2, '0')}m : ${seconds.toString().padStart(2, '0')}s`);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const percentage = (slotsFilled / totalSlots) * 100;
  const isFull = slotsFilled >= totalSlots;

  return (
    <div className="bg-bg-card rounded-2xl p-8 border border-white/5 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Clock className="text-primary h-6 w-6" />
            Next Match: <span className="text-primary">8:00 PM</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2 font-medium">Map: Erangel | Squad | TPP</p>
        </div>
        <div className="bg-bg-dark px-6 py-3 rounded-xl border border-white/5 font-mono text-xl text-white tracking-widest shadow-inner">
          {timeLeft}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">Slots Filled</span>
            <div className="text-4xl font-bold text-white mt-2">
              {slotsFilled}<span className="text-gray-600 text-xl font-normal">/{totalSlots}</span>
            </div>
          </div>
          <div className="text-right">
             <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">Entry Fee</span>
             <div className="text-3xl font-bold text-primary">₹100</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-3 bg-bg-dark rounded-full overflow-hidden border border-white/5">
          <div 
            className={`h-full transition-all duration-1000 ease-out ${isFull ? 'bg-red-500' : 'bg-primary'}`}
            style={{ width: `${percentage}%` }}
          >
          </div>
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center gap-2 text-sm">
            {isFull ? (
              <span className="flex items-center text-red-500 font-bold bg-red-500/10 px-4 py-1.5 rounded-full">
                <AlertCircle className="w-4 h-4 mr-2" /> SLOT FULL
              </span>
            ) : (
              <span className="flex items-center text-primary font-bold bg-primary/10 px-4 py-1.5 rounded-full">
                <Users className="w-4 h-4 mr-2" /> {totalSlots - slotsFilled} Slots Left
              </span>
            )}
          </div>
          
          <button 
            className={`px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all ${
              isFull 
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                : 'bg-white text-bg-dark hover:bg-gray-100'
            }`}
            disabled={isFull}
          >
            {isFull ? 'Sold Out' : 'Book Slot'}
          </button>
        </div>
      </div>
    </div>
  );
}
