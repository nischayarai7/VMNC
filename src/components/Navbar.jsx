import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Trophy, Newspaper, Users, BarChart3, LogIn } from 'lucide-react'

const links = [
  { id: 'tournaments', label: 'Tournaments', icon: <Trophy className="h-4 w-4" /> },
  { id: 'leaderboard', label: 'Leaderboard', icon: <BarChart3 className="h-4 w-4" /> },
  { id: 'profiles', label: 'Teams & Players', icon: <Users className="h-4 w-4" /> },
  { id: 'news', label: 'News', icon: <Newspaper className="h-4 w-4" /> },
]

// !! Accept user as prop
export default function Navbar({ onLogin, user }) {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 80)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  const go = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -80 : 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-surface-800/50 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.svg" alt="VMNC" className="h-8 w-8" />
          <span className="font-semibold tracking-wide">VMNC</span>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="px-3 py-2 rounded-md text-sm hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              {l.icon}{l.label}
            </button>
          ))}
          {/* Only show login if NOT logged in */}
          {!user && (
            <button onClick={onLogin} className="ml-2 px-4 py-2 rounded-md bg-primary text-white shadow-glow hover:opacity-90 inline-flex items-center gap-2">
              <LogIn className="h-4 w-4" /> Login
            </button>
          )}
        </nav>

        <button onClick={() => setOpen((o) => !o)} className="md:hidden p-2 rounded hover:bg-white/5">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-surface-900/95">
          <div className="px-4 py-3 flex flex-col">
            {links.map((l) => (
              <button key={l.id} onClick={() => go(l.id)} className="px-3 py-3 text-left hover:text-primary inline-flex items-center gap-2">
                {l.icon}{l.label}
              </button>
            ))}
            {/* Only show login if NOT logged in */}
            {!user && (
              <button onClick={onLogin} className="mt-2 px-4 py-2 rounded-md bg-primary text-white">Login</button>
            )}
          </div>
        </div>
      )}
    </motion.header>
  )
}