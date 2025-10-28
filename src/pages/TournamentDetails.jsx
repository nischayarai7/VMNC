import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { tournaments } from '../data/tournaments'

export default function TournamentDetails() {
  const { id } = useParams()
  const tourney = tournaments.find(t => String(t.id) === String(id))
  if (!tourney) {
    return <div className="text-center text-lg text-red-500 pt-20">Tournament Not Found.</div>
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <Link to="/" className="text-primary hover:underline text-sm">&larr; Back to tournaments</Link>

      <div className="rounded-xl shadow-lg overflow-hidden mt-4 bg-surface-800 ring-1 ring-black/20">
        <div className="h-44 sm:h-56 md:h-60 relative">
          <img
            src={tourney.banner || "/assets/placeholder.jpg"}
            alt={tourney.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow">
            {tourney.status.toUpperCase()}
          </div>
        </div>
        <div className="p-6 flex flex-col gap-2">
          <h1 className="font-black text-2xl sm:text-3xl mb-2">
            {tourney.name}
          </h1>
          <div className="flex gap-5 text-xs text-white/60 mb-2">
            <span className="bg-surface-700 px-2 py-1 rounded">
              Start: <span className="text-white">{tourney.startDate}</span>
            </span>
            <span className="bg-surface-700 px-2 py-1 rounded">
              End: <span className="text-white">{tourney.endDate}</span>
            </span>
            <span className="bg-surface-700 px-2 py-1 rounded">
              Prize: <span className="text-primary">{tourney.prize}</span>
            </span>
          </div>
          <p className="text-white/90 text-sm mb-2">
            {tourney.description}
          </p>
          <div className="text-white/80 text-sm mt-3">
            <span className="block font-semibold mb-1">Teams</span>
            <div className="flex flex-wrap gap-2">
              {tourney.teams.map(team => (
                <span className="px-2 py-1 rounded bg-white/10" key={team}>{team}</span>
              ))}
            </div>
          </div>
          <div className="mt-7">
            <h2 className="font-bold text-lg mb-2 text-primary">Brackets / Schedule</h2>
            <div className="bg-surface-900/70 text-white/80 rounded-lg p-4 shadow-inner">
              {tourney.bracket || "Bracket info coming soon."}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}