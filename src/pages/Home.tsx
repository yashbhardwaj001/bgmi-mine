import React from 'react';
import SlotCounter from '../components/SlotCounter';
import TournamentInfo from '../components/TournamentInfo';
import Features from '../components/Features';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-bg-dark">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute inset-0 bg-[radial-gradient(#e2b714_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-bg-dark via-bg-dark/95 to-bg-dark"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight animate-[slide-up_0.5s_ease-out]">
            Premium <span className="text-primary">BGMI</span> Tournaments
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl text-gray-400 font-medium mt-2 block">Compete. Win. Earn.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Join the most trusted esports platform. Daily matches, guaranteed payouts, and a fair play environment.
          </p>

          <a 
            href="/login.html"
            className="inline-block bg-primary text-bg-dark text-lg font-bold px-10 py-4 rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-20">
        <SlotCounter />
        <TournamentInfo />
        <Features />
      </main>
    </div>
  );
}
