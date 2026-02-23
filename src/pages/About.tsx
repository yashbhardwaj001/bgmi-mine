import React from 'react';
import { Mail, Target, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-20 bg-bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-primary">BattleZone</span>
          </h1>
          <p className="text-xl text-gray-400 font-light">
            Redefining the competitive mobile esports landscape in India.
          </p>
        </div>

        <div className="space-y-8">
          {/* Mission */}
          <div className="bg-bg-card p-10 rounded-2xl border border-white/5">
            <div className="flex items-start gap-8">
              <div className="bg-bg-dark p-4 rounded-xl border border-white/5">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed">
                  At BattleZone, our mission is to provide a professional, fair, and lucrative platform for BGMI players to showcase their skills. We believe every gamer deserves a chance to compete at a high level and earn rewards for their dedication. We are committed to building a community where talent meets opportunity.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-bg-card p-10 rounded-2xl border border-white/5">
            <div className="flex items-start gap-8">
              <div className="bg-bg-dark p-4 rounded-xl border border-white/5">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Automated slot booking system with instant confirmation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Guaranteed prize pool distribution within 24 hours</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Advanced anti-cheat detection and manual moderation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Community-driven tournaments and special events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-bg-card p-10 rounded-2xl border border-white/5 text-center">
            <Globe className="h-10 w-10 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Have questions about tournaments, payments, or partnerships? Our team is here to help.
            </p>
            <a 
              href="mailto:contact@battlezone.com" 
              className="inline-flex items-center gap-2 bg-white text-bg-dark px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5" />
              contact@battlezone.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
