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

    const PARTICLE_COUNT = 45;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.3 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
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
      style={{ opacity: 0.4 }}
    />
  );
};

// ── Glitch Text ──────────────────────────────────────────────────────────────
const GlitchText: React.FC<{ text: string; className?: string; style?: React.CSSProperties }> = ({ text, className, style }) => (
  <span
    className={className}
    data-text={text}
    style={{ position: 'relative', display: 'inline-block', ...style }}
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
        color: #C9A84C;
        clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
        transform: translate(-2px, -2px);
        opacity: 1;
      }
      [data-text]:hover::after {
        animation: glitch-bot 0.4s steps(2, end) 0s 1;
        color: #5a4a2a;
        clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
        transform: translate(2px, 2px);
        opacity: 1;
      }
      @keyframes glitch-top {
        0%   { transform: translate(-2px,-2px); }
        50%  { transform: translate(2px, 2px); }
        100% { transform: translate(-2px,-2px); }
      }
      @keyframes glitch-bot {
        0%   { transform: translate(2px, 2px); }
        50%  { transform: translate(-2px,-2px); }
        100% { transform: translate(2px, 2px); }
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
    <div className="min-h-screen" style={{ background: '#0A0A0A' }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {/* Particle bg */}
        <ParticleCanvas />

        {/* Subtle radial vignette */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% 40%, rgba(201,168,76,0.04) 0%, transparent 70%), radial-gradient(ellipse 100% 100% at 50% 100%, rgba(10,10,10,0.98) 0%, transparent 60%)',
          }}
        />

        {/* Subtle scanlines */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(201,168,76,0.008) 2px, rgba(201,168,76,0.008) 4px)',
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
              background: 'rgba(201,168,76,0.07)',
              border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: '999px',
              padding: '6px 18px',
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: '#C9A84C',
              textTransform: 'uppercase',
              fontWeight: 600,
              animation: 'fadeSlideDown 0.6s ease both',
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#C9A84C',
                display: 'inline-block',
                animation: 'pulse 3s infinite',
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
              style={{ color: '#C9A84C', textShadow: '0 0 30px rgba(201,168,76,0.25)' }}
            />
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#7a7a7a',
              maxWidth: '560px',
              margin: '0 auto 40px',
              lineHeight: 1.75,
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
              gap: 14,
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
                background: '#C9A84C',
                color: '#0A0A0A',
                fontWeight: 800,
                fontSize: '0.95rem',
                padding: '13px 34px',
                borderRadius: '6px',
                textDecoration: 'none',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                (e.currentTarget as HTMLElement).style.filter = 'brightness(1.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.filter = 'brightness(1)';
              }}
            >
              Register Now
            </a>
            <a
              href="#tournaments"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                color: '#9a9a9a',
                fontWeight: 600,
                fontSize: '0.95rem',
                padding: '13px 34px',
                borderRadius: '6px',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.12)',
                letterSpacing: '0.04em',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.35)';
                (e.currentTarget as HTMLElement).style.color = '#C9A84C';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                (e.currentTarget as HTMLElement).style.color = '#9a9a9a';
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
              opacity: 0.3,
              animation: 'fadeSlideDown 1s 0.6s ease both',
            }}
          >
            <span style={{ fontSize: 10, letterSpacing: '0.22em', color: '#7a7a7a', textTransform: 'uppercase' }}>
              Scroll
            </span>
            <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, #7a7a7a, transparent)' }} />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section
        className="reveal"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(201,168,76,0.02)',
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
                  fontWeight: 800,
                  color: '#C9A84C',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '-0.02em',
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 12, color: '#555', marginTop: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
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
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
          <span
            style={{
              fontSize: 10,
              letterSpacing: '0.25em',
              color: '#C9A84C',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Live Slots &amp; Tournaments
          </span>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.07)' }} />
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
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
