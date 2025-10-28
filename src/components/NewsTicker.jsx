import React from 'react'
import { newsItems } from '../data/sampleData.js'
import { motion } from 'framer-motion'

export default function NewsTicker() {
  const content = [...newsItems, ...newsItems]
  return (
    <div className="relative border-y border-white/5 bg-surface-800/80 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
      >
        {content.map((n, idx) => (
          <a key={`${n.id}-${idx}`} href={n.link} className="px-6 py-3 flex gap-2 items-center hover:text-primary">
            <span className="text-primary text-xs uppercase">{n.tag}</span>
            <span className="text-sm">{n.title}</span>
            <span className="text-xs text-white/60">• {new Date(n.date).toLocaleDateString()}</span>
          </a>
        ))}
      </motion.div>
    </div>
  )
}