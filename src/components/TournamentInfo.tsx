import React from 'react';
import { Trophy, Target, Map, Users, Crosshair, Clock } from 'lucide-react';

const timeSlots = [
  { time: '6:00 PM', label: 'Early Evening', status: 'Open', statusColor: '#31a24c', border: 'rgba(49,162,76,0.25)', bg: 'rgba(49,162,76,0.05)' },
  { time: '9:00 PM', label: 'Prime Time', status: 'Open', statusColor: '#C9A84C', border: 'rgba(201,168,76,0.25)', bg: 'rgba(201,168,76,0.05)' },
  { time: '11:00 PM', label: 'Night Owl', status: 'Open', statusColor: '#7c9ef8', border: 'rgba(124,158,248,0.25)', bg: 'rgba(124,158,248,0.05)' },
];

export default function TournamentInfo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
      {/* Prize Pool */}
      <div className="bg-bg-card rounded-2xl p-8 border border-white/5">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Trophy className="text-primary h-6 w-6" />
          Prize Pool Distribution
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between bg-bg-dark p-5 rounded-xl border border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">1</div>
              <span className="font-medium text-lg text-gray-200">Winner</span>
            </div>
            <span className="text-2xl font-bold text-primary">₹2000</span>
          </div>

          <div className="flex items-center justify-between bg-bg-dark p-5 rounded-xl border border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gray-500/20 flex items-center justify-center text-gray-400 font-bold text-sm">2</div>
              <span className="font-medium text-lg text-gray-200">Runner Up</span>
            </div>
            <span className="text-2xl font-bold text-gray-300">₹1000</span>
          </div>

          <div className="flex items-center justify-between bg-bg-dark p-5 rounded-xl border border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-orange-700/20 flex items-center justify-center text-orange-700 font-bold text-sm">3</div>
              <span className="font-medium text-lg text-gray-200">2nd Runner Up</span>
            </div>
            <span className="text-2xl font-bold text-orange-600">₹500</span>
          </div>

          <div className="flex items-center justify-between bg-red-500/5 p-5 rounded-xl border border-red-500/10 mt-6">
            <div className="flex items-center gap-4">
              <Crosshair className="text-red-400 h-5 w-5" />
              <span className="font-medium text-lg text-red-400">Per Kill</span>
            </div>
            <span className="text-2xl font-bold text-red-400">₹20</span>
          </div>
        </div>
      </div>

      {/* Match Details */}
      <div className="bg-bg-card rounded-2xl p-8 border border-white/5">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Target className="text-primary h-6 w-6" />
          Match Details
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-bg-dark p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center">
            <Map className="h-6 w-6 text-gray-400 mb-3" />
            <span className="text-gray-500 text-xs uppercase tracking-wider font-bold">Map</span>
            <span className="text-lg font-bold text-white mt-1">Erangel</span>
          </div>

          <div className="bg-bg-dark p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center">
            <Users className="h-6 w-6 text-gray-400 mb-3" />
            <span className="text-gray-500 text-xs uppercase tracking-wider font-bold">Mode</span>
            <span className="text-lg font-bold text-white mt-1">Squad</span>
          </div>

          <div className="bg-bg-dark p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center">
            <Target className="h-6 w-6 text-gray-400 mb-3" />
            <span className="text-gray-500 text-xs uppercase tracking-wider font-bold">Perspective</span>
            <span className="text-lg font-bold text-white mt-1">TPP</span>
          </div>

          <div className="bg-bg-dark p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center">
            <Users className="h-6 w-6 text-gray-400 mb-3" />
            <span className="text-gray-500 text-xs uppercase tracking-wider font-bold">Lobby</span>
            <span className="text-lg font-bold text-white mt-1">Advanced</span>
          </div>
        </div>

        <div className="mt-8 p-6 bg-white/3 rounded-xl border border-white/8">
          <h4 className="font-semibold text-primary mb-2 text-xs uppercase tracking-widest">Room ID & Password</h4>
          <p className="text-sm text-gray-500 leading-relaxed">
            Credentials will be shared 15 minutes before the match start time via email and SMS to registered players.
          </p>
        </div>
      </div>

      {/* ── Today's Match Schedule ─────────────────────────────────────────── */}
      <div className="lg:col-span-2 bg-bg-card rounded-2xl p-8 border border-white/5">
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <Clock className="text-primary h-6 w-6" />
          Today's Match Schedule
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {timeSlots.map((slot) => (
            <div
              key={slot.time}
              style={{ background: slot.bg, border: `1px solid ${slot.border}`, borderRadius: '16px', padding: '28px 24px' }}
            >
              {/* Time */}
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', fontFamily: 'Inter, sans-serif' }}>
                {slot.time}
              </div>
              <div style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#666', marginTop: '4px', fontWeight: 600 }}>
                {slot.label}
              </div>

              {/* Status badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, background: 'rgba(0,0,0,0.3)', borderRadius: '999px', padding: '4px 12px' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: slot.statusColor, display: 'inline-block' }} />
                <span style={{ fontSize: 12, color: slot.statusColor, fontWeight: 600 }}>{slot.status}</span>
              </div>

              {/* Register button */}
              <a
                href="/login.html"
                style={{
                  display: 'block',
                  marginTop: 20,
                  textAlign: 'center',
                  padding: '10px 0',
                  borderRadius: '8px',
                  background: slot.statusColor,
                  color: '#0A0A0A',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'filter 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1.15)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = 'brightness(1)'; }}
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

