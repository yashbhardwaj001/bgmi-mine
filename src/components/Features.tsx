import React from 'react';
import { Shield, Zap, Headset, BadgeCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Instant Room ID",
      description: "Get Room ID & Password instantly 15 mins before match via SMS/Email."
    },
    {
      icon: <Headset className="h-6 w-6 text-primary" />,
      title: "24/7 Support",
      description: "Dedicated support team available round the clock to resolve your queries."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Secure Payment",
      description: "100% secure payment gateways with instant refund for cancelled matches."
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-primary" />,
      title: "Fair Play System",
      description: "Strict anti-cheat monitoring and manual spectating to ensure fair gameplay."
    }
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-center mb-16 text-white">
        Why Choose <span className="text-primary">BattleZone?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300">
            <div className="bg-bg-dark w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/5">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
