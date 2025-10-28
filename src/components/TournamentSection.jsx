import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { tournaments } from '../data/tournaments'
import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'

const statuses = [
  { key: 'all', label: 'All' },
  { key: 'ongoing', label: 'Ongoing' },
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'finished', label: 'Finished' },
]

export default function TournamentSection() {
  const [status, setStatus] = useState('all')
  const [sort, setSort] = useState('date-desc')

  const filtered = useMemo(() => {
    let arr = [...tournaments]
    if (status !== 'all') arr = arr.filter(t => t.status === status)
    arr.sort((a, b) => {
      const aDate = new Date(a.startDate).getTime()
      const bDate = new Date(b.startDate).getTime()
      return sort === 'date-asc' ? aDate - bDate : bDate - aDate
    })
    return arr
  }, [status, sort])

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Tournaments</h2>
        <div className="flex items-center gap-2">
          {statuses.map(s => (
            <button
              key={s.key}
              onClick={() => setStatus(s.key)}
              className={`px-3 py-2 rounded-md text-sm border ${status===s.key?'border-primary text-primary':'border-white/10 hover:border-white/20'}`}
            >
              {s.label}
            </button>
          ))}
          <div className="ml-2 relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="bg-surface-900 border border-white/10 rounded-md px-3 py-2 text-sm pr-8"
            >
              <option value="date-desc">Newest</option>
              <option value="date-asc">Oldest</option>
            </select>
            <Filter className="absolute right-2 top-2.5 h-4 w-4 text-white/50 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((t, idx) => (
          <motion.article
            key={t.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: idx * 0.03 }}
            className="rounded-xl overflow-hidden border border-white/5 bg-surface-800/60 hover:shadow-glow"
          >
            <div className="aspect-[16/9] relative">
              <img src={t.banner} alt={t.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-2 left-2 text-xs bg-primary text-white px-2 py-1 rounded">{t.status.toUpperCase()}</div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <p className="text-white/70 text-sm">
                {new Date(t.startDate).toLocaleDateString()} — {new Date(t.endDate).toLocaleDateString()}
              </p>
              <p className="text-white/70 text-sm mt-1">Teams: {t.teams.join(', ')}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm">{t.winner ? `Winner: ${t.winner}` : t.prize}</span>
                <Link to={`/tournaments/${t.id}`} className="text-primary text-sm hover:underline">View Details</Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}