import React from 'react';
// Replace with your actual paths if data is custom
import { teams, players } from '../data/sampleData.js';
import { motion } from 'framer-motion';
import { Twitter, Youtube, Instagram } from 'lucide-react';

// Utility: show socials only if links exist
function Socials({ socials }) {
  return (
    <div className="flex items-center gap-2">
      {socials?.x && (
        <a href={socials.x} className="p-2 rounded hover:bg-white/5" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-4 w-4" />
        </a>
      )}
      {socials?.yt && (
        <a href={socials.yt} className="p-2 rounded hover:bg-white/5" target="_blank" rel="noopener noreferrer">
          <Youtube className="h-4 w-4" />
        </a>
      )}
      {socials?.ig && (
        <a href={socials.ig} className="p-2 rounded hover:bg-white/5" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

export default function ProfilesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Teams & Players</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {(teams || []).map((t, idx) => (
          <motion.div
            key={t.id || idx}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: idx * 0.03 }}
            className="rounded-xl border border-white/5 bg-surface-800 p-4"
          >
            <div className="flex items-center gap-3">
              <img
                src={t.logo || '/assets/avatar.svg'}
                alt={t.name}
                className="h-10 w-10 rounded"
                onError={e => { e.target.style.display = 'none'; }}
              />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-white/60">{t.wins}W - {t.losses}L</div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm text-white/70">{t.points} pts</span>
              <Socials socials={t.socials} />
            </div>
          </motion.div>
        ))}
      </div>
      
      <h3 className="font-semibold mt-10 mb-4">Players</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(players || []).map((p, idx) => (
          <motion.div
            key={p.id || idx}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.02 }}
            className="rounded-xl border border-white/5 bg-surface-800 p-4"
          >
            <div className="flex items-center gap-3">
              <img
                src={p.avatar || '/assets/avatar.svg'}
                alt={p.name}
                className="h-10 w-10 rounded-full"
                onError={e => { e.target.style.display = 'none'; }}
              />
              <div>
                <div className="font-semibold">
                  {p.name} <span className="text-white/50 text-sm">({p.team})</span>
                </div>
                <div className="text-xs text-white/60">{p.role}</div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-white/70">
              <span>KDA {p.kda}</span>
              <span>Rating {p.rating}</span>
            </div>
            <div className="mt-3">
              <Socials socials={p.socials} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}