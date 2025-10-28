import React from 'react';
import { Twitter, Youtube, Instagram, Trophy, Newspaper, Users, BarChart3 } from 'lucide-react';

export default function Footer() {
  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const logoSrc = "/assets/avatar.svg";
  const [logoError, setLogoError] = React.useState(false);

  return (
    <footer className="border-t border-white/5 bg-surface-900/90">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            {!logoError ? (
              <img
                src={logoSrc}
                alt="VMNC"
                className="h-8 w-8"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="h-8 w-8 rounded bg-gradient-to-tr from-primary to-secondary shadow-glow" />
            )}
            <span className="font-semibold">VMNC</span>
          </div>
          <p className="text-sm text-white/70 mt-3">
            Valorant Mobile Nepal Community — events, news, and esports action.
          </p>
          <div className="flex items-center gap-2 mt-3">
            <a href="#" className="p-2 rounded hover:bg-white/5">
              <Twitter />
            </a>
            <a href="#" className="p-2 rounded hover:bg-white/5">
              <Youtube />
            </a>
            <a href="#" className="p-2 rounded hover:bg-white/5">
              <Instagram />
            </a>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3">Quick Links</div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <button onClick={() => go('tournaments')}
                    className="px-2 py-2 rounded hover:bg-white/5 inline-flex items-center gap-2">
              <Trophy className="h-4 w-4" />Tournaments
            </button>
            <button onClick={() => go('leaderboard')}
                    className="px-2 py-2 rounded hover:bg-white/5 inline-flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />Leaderboard
            </button>
            <button onClick={() => go('profiles')}
                    className="px-2 py-2 rounded hover:bg-white/5 inline-flex items-center gap-2">
              <Users className="h-4 w-4" />Teams & Players
            </button>
            <button onClick={() => go('news')}
                    className="px-2 py-2 rounded hover:bg-white/5 inline-flex items-center gap-2">
              <Newspaper className="h-4 w-4" />News
            </button>
          </div>
        </div>
        <div className="text-sm text-white/60">
          <div>&copy; {new Date().getFullYear()} VMNC. All rights reserved.</div>
          <div className="mt-2">Built with React, Tailwind, Framer Motion, and Recharts.</div>
        </div>
      </div>
    </footer>
  );
}