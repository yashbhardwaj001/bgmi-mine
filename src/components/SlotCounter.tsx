import React, { useState, useEffect } from 'react';
import { Clock, Users, AlertCircle, X, Swords } from 'lucide-react';

export default function SlotCounter() {
  const [showPopup, setShowPopup] = useState(false);
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
            className={`px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wider transition-all ${isFull
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-white text-bg-dark hover:bg-gray-100 active:scale-95'
              }`}
            disabled={isFull}
            onClick={() => !isFull && setShowPopup(true)}
          >
            {isFull ? 'Sold Out' : 'Book Slot'}
          </button>
        </div>
      </div>

      {/* ── Register Popup ───────────────────────────────────────────── */}
      {showPopup && (
        <div
          onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.65)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div style={{
            background: '#1e293b',
            border: '1px solid rgba(226,183,20,0.25)',
            borderRadius: 16,
            padding: '36px 32px 28px',
            maxWidth: 380,
            width: '90%',
            textAlign: 'center',
            position: 'relative',
            animation: 'popUp 0.25s ease',
            boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
          }}>
            {/* Close X */}
            <button
              onClick={() => setShowPopup(false)}
              style={{
                position: 'absolute', top: 14, right: 16,
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#64748b', fontSize: 20, lineHeight: 1,
              }}
            >
              <X size={18} />
            </button>

            {/* Icon */}
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(226,183,20,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <Swords size={26} color="#e2b714" />
            </div>

            <h3 style={{ color: '#fff', fontWeight: 800, fontSize: 20, marginBottom: 8 }}>
              Ready to Battle?
            </h3>
            <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
              Register now to secure your slot in the next BGIS match.
              Only <strong style={{ color: '#e2b714' }}>{totalSlots - slotsFilled} slots</strong> remaining!
            </p>

            {/* CTA */}
            <a
              href="/login.html"
              style={{
                display: 'block',
                background: '#e2b714',
                color: '#080c14',
                fontWeight: 800,
                fontSize: 15,
                padding: '13px 0',
                borderRadius: 8,
                textDecoration: 'none',
                marginBottom: 12,
                letterSpacing: '0.03em',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              ⚔️ Register Now
            </a>

            <button
              onClick={() => setShowPopup(false)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#64748b',
                borderRadius: 8,
                padding: '10px 0',
                width: '100%',
                fontSize: 14,
                cursor: 'pointer',
                transition: 'border-color 0.2s',
              }}
            >
              Maybe Later
            </button>
          </div>

          <style>{`
            @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
            @keyframes popUp  { from { opacity:0; transform:scale(0.9) translateY(12px) } to { opacity:1; transform:scale(1) translateY(0) } }
          `}</style>
        </div>
      )}
    </div>
  );
}
