import React, { useEffect, useRef } from 'react';
import SlotCounter from '../components/SlotCounter';
import TournamentInfo from '../components/TournamentInfo';
import Features from '../components/Features';

// ── Particle Canvas ──────────────────────────────────────────────────────────
const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const PARTICLE_COUNT = 70;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226,183,20,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

// ── Glitch Text ──────────────────────────────────────────────────────────────
const GlitchText: React.FC<{ text: string; className?: string; style?: React.CSSProperties }> = ({ text, className, style }) => (
  <span
    className={className}
    data-text={text}
    style={{
      position: 'relative',
      display: 'inline-block',
      ...style,
    }}
  >
    {text}
    <style>{`
      [data-text]::before,
      [data-text]::after {
        content: attr(data-text);
        position: absolute;
        left: 0; top: 0;
        width: 100%; height: 100%;
        opacity: 0;
      }
      [data-text]:hover::before {
        animation: glitch-top 0.4s steps(2, end) 0s 1;
        color: #e2b714;
        clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
        transform: translate(-3px, -3px);
        opacity: 1;
      }
      [data-text]:hover::after {
        animation: glitch-bot 0.4s steps(2, end) 0s 1;
        color: #64748b;
        clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
        transform: translate(3px, 3px);
        opacity: 1;
      }
      @keyframes glitch-top {
        0%   { transform: translate(-3px,-3px); }
        50%  { transform: translate(3px, 3px); }
        100% { transform: translate(-3px,-3px); }
      }
      @keyframes glitch-bot {
        0%   { transform: translate(3px, 3px); }
        50%  { transform: translate(-3px,-3px); }
        100% { transform: translate(3px, 3px); }
      }
    `}</style>
  </span>
);

// ── Scroll-Reveal Hook ───────────────────────────────────────────────────────
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

// ── Stats Bar ────────────────────────────────────────────────────────────────
const stats = [
  { label: 'Active Players', value: '12,400+' },
  { label: 'Tournaments Hosted', value: '840+' },
  { label: 'Total Prize Pool', value: '₹9,00,000+' },
  { label: 'Fair Play Rate', value: '99.8%' },
];

// ── Main Home ────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen" style={{ background: '#080c14' }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {/* Particle bg */}
        <ParticleCanvas />

        {/* Dark radial spotlight */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(226,183,20,0.07) 0%, transparent 70%), radial-gradient(ellipse 100% 100% at 50% 100%, rgba(8,12,20,0.95) 0%, transparent 60%)',
          }}
        />

        {/* Horizontal scanlines overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(226,183,20,0.015) 2px, rgba(226,183,20,0.015) 4px)',
          }}
        />

        {/* Hero content */}
        <div
          className="relative z-10 text-center px-4"
          style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '80px' }}
        >
          {/* BGMI Badge */}
          <div
            className="inline-flex items-center gap-2 mb-8"
            style={{
              background: 'rgba(226,183,20,0.1)',
              border: '1px solid rgba(226,183,20,0.35)',
              borderRadius: '999px',
              padding: '6px 18px',
              fontSize: '12px',
              letterSpacing: '0.18em',
              color: '#e2b714',
              textTransform: 'uppercase',
              fontWeight: 700,
              animation: 'fadeSlideDown 0.6s ease both',
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#e2b714',
                display: 'inline-block',
                boxShadow: '0 0 8px #e2b714',
                animation: 'pulse 2s infinite',
              }}
            />
            Official BGIS Tournament Platform
          </div>

          {/* Main heading */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              animation: 'fadeSlideDown 0.7s 0.1s ease both',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Enter The{' '}
            <GlitchText
              text="BGIS"
              className="text-primary"
              style={{ color: '#e2b714', textShadow: '0 0 40px rgba(226,183,20,0.4)' }}
            />
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#94a3b8',
              maxWidth: '580px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
              fontWeight: 400,
              animation: 'fadeSlideDown 0.7s 0.2s ease both',
            }}
          >
            India's most trusted BGMI esports arena. Compete in daily matches,
            claim real cash prizes, and prove you're the last squad standing.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
              animation: 'fadeSlideDown 0.7s 0.3s ease both',
            }}
          >
            <a
              href="/login.html"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#e2b714',
                color: '#080c14',
                fontWeight: 800,
                fontSize: '1rem',
                padding: '14px 36px',
                borderRadius: '8px',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'all 0.25s ease',
                boxShadow: '0 0 30px rgba(226,183,20,0.35)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(226,183,20,0.55)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(226,183,20,0.35)';
              }}
            >
              ⚔️ Register Now
            </a>
            <a
              href="#tournaments"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                color: '#e2b714',
                fontWeight: 700,
                fontSize: '1rem',
                padding: '14px 36px',
                borderRadius: '8px',
                textDecoration: 'none',
                border: '1px solid rgba(226,183,20,0.4)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(226,183,20,0.08)';
                (e.currentTarget as HTMLElement).style.borderColor = '#e2b714';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(226,183,20,0.4)';
              }}
            >
              View Tournaments
            </a>
          </div>

          {/* Scroll cue */}
          <div
            style={{
              marginTop: 64,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 6,
              opacity: 0.4,
              animation: 'fadeSlideDown 1s 0.6s ease both',
            }}
          >
            <span style={{ fontSize: 11, letterSpacing: '0.2em', color: '#94a3b8', textTransform: 'uppercase' }}>
              Scroll
            </span>
            <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #94a3b8, transparent)' }} />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section
        className="reveal"
        style={{
          borderTop: '1px solid rgba(226,183,20,0.12)',
          borderBottom: '1px solid rgba(226,183,20,0.12)',
          background: 'rgba(226,183,20,0.03)',
          padding: '32px 24px',
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'all 0.7s ease',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 32,
            textAlign: 'center',
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: 900,
                  color: '#e2b714',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: '#64748b', marginTop: 4, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DIVIDER LABEL ─────────────────────────────────────────────────── */}
      <div
        id="tournaments"
        className="reveal"
        style={{
          maxWidth: 1100,
          margin: '80px auto 0',
          padding: '0 24px',
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'all 0.7s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(226,183,20,0.15)' }} />
          <span
            style={{
              fontSize: 11,
              letterSpacing: '0.22em',
              color: '#e2b714',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            Live Slots & Tournaments
          </span>
          <div style={{ flex: 1, height: 1, background: 'rgba(226,183,20,0.15)' }} />
        </div>
      </div>

      {/* ── MAIN COMPONENTS ───────────────────────────────────────────────── */}
      <main
        className="reveal"
        style={{
          maxWidth: 1100,
          margin: '40px auto 0',
          padding: '0 24px 100px',
          opacity: 0,
          transform: 'translateY(30px)',
          transition: 'all 0.8s 0.1s ease',
        }}
      >
        <SlotCounter />
        <TournamentInfo />
        <Features />
      </main>

      {/* ── GLOBAL KEYFRAMES ──────────────────────────────────────────────── */}
      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 8px #e2b714; }
          50%       { box-shadow: 0 0 18px #e2b714; }
        }
      `}</style>
    </div>
  );
}
