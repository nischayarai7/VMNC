import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero({ onJoin }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const yTitle = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])
  const opacityTitle = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[url('/assets/hero/valorant-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-surface-900" />
        <div className="absolute inset-0 bg-grid bg-grid" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h1
          style={{ y: yTitle, opacity: opacityTitle }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
        >
          The Home of Valorant Mobile Nepal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-white/80 max-w-2xl mx-auto"
        >
          Tournaments, scrims, leaderboards, and news—all in one place. Join the competitive scene today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <button onClick={onJoin} className="px-6 py-3 rounded-md bg-primary text-white shadow-glow hover:opacity-90">
            Join with Discord
          </button>
          <a href="#tournaments" className="px-6 py-3 rounded-md bg-white/5 hover:bg-white/10">
            Explore Tournaments
          </a>
        </motion.div>
      </div>
    </section>
  )
}