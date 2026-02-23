import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Twitch, Gamepad2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary/10 p-1.5 rounded-lg">
                <Gamepad2 className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Battle<span className="text-primary">Zone</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The ultimate platform for competitive mobile gaming. Join daily tournaments, showcase your skills, and win real cash prizes.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Connect With Us</h4>
            <div className="flex space-x-5 mb-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitch className="h-5 w-5" /></a>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <Mail className="h-4 w-4 mr-3" />
              <span>support@battlezone.com</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} BattleZone Esports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
