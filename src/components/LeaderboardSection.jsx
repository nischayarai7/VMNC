import React from 'react'
import { statsSeries, teams, players } from '../data/sampleData.js'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LineChart, Line } from 'recharts'
import { motion } from 'framer-motion'

export default function LeaderboardSection() {
  const topTeams = [...teams].sort((a,b)=>b.points-a.points).slice(0,5)
  const topPlayers = [...players].sort((a,b)=>b.rating-a.rating).slice(0,5)

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Leaderboard & Stats</h2>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="rounded-xl border border-white/5 bg-surface-900 p-4">
            <h3 className="font-semibold mb-2">Team Points</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statsSeries}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2835" />
                  <XAxis dataKey="name" stroke="#9aa5b1" />
                  <YAxis stroke="#9aa5b1" />
                  <Tooltip contentStyle={{ background: '#0f1218', border: '1px solid #222' }} />
                  <Legend />
                  <Bar dataKey="points" fill="#ff4655" />
                  <Bar dataKey="wins" fill="#5865f2" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="rounded-xl border border-white/5 bg-surface-900 p-4">
            <h3 className="font-semibold mb-2">Form Trend</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={statsSeries}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f2835" />
                  <XAxis dataKey="name" stroke="#9aa5b1" />
                  <YAxis stroke="#9aa5b1" />
                  <Tooltip contentStyle={{ background: '#0f1218', border: '1px solid #222' }} />
                  <Legend />
                  <Line type="monotone" dataKey="points" stroke="#ff4655" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="wins" stroke="#22c55e" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-3">Top Teams</h3>
          <ul className="space-y-2">
            {topTeams.map(t => (
              <li key={t.id} className="flex items-center justify-between rounded-lg border border-white/5 bg-surface-800 p-3">
                <div className="flex items-center gap-3">
                  <img src={t.logo} alt={t.name} className="h-8 w-8 rounded" />
                  <span>{t.name}</span>
                </div>
                <span className="text-white/70 text-sm">{t.points} pts</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Top Players</h3>
          <ul className="space-y-2">
            {topPlayers.map(p => (
              <li key={p.id} className="flex items-center justify-between rounded-lg border border-white/5 bg-surface-800 p-3">
                <div className="flex items-center gap-3">
                  <img src={p.avatar} alt={p.name} className="h-8 w-8 rounded-full" />
                  <div>
                    <div>{p.name} <span className="text-white/50 text-sm">({p.team})</span></div>
                    <div className="text-xs text-white/60">{p.role}</div>
                  </div>
                </div>
                <span className="text-white/70 text-sm">{p.rating} rating</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}