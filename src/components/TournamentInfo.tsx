import React from 'react';
import { Trophy, Target, Map, Users, Crosshair } from 'lucide-react';

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

        <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
          <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-wide">Room ID & Password</h4>
          <p className="text-sm text-gray-400 leading-relaxed">
            Credentials will be shared 15 minutes before the match start time via email and SMS to registered players.
          </p>
        </div>
      </div>
    </div>
  );
}
