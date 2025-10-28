import React from 'react'
import { newsItems } from '../data/sampleData.js'
import { motion } from 'framer-motion'

export default function NewsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">News & Announcements</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((n, idx) => (
          <motion.article
            key={n.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.03 }}
            className="rounded-xl overflow-hidden border border-white/5 bg-surface-800"
          >
            <div className="aspect-video relative">
              <img src={n.media ?? '/assets/news/placeholder.jpg'} alt={n.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-2 left-2 text-xs bg-primary text-white px-2 py-1 rounded">{n.tag}</div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{n.title}</h3>
              <p className="text-sm text-white/70">{n.summary}</p>
              <p className="text-xs text-white/50 mt-2">{new Date(n.date).toLocaleDateString()}</p>
              <a href="#" className="inline-block mt-3 text-primary text-sm hover:underline">Read More</a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}