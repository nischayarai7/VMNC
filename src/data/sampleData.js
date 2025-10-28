export const newsItems = [
  { id: 1, title: 'Weekly Scrims Open', date: '2025-10-20', tag: 'Scrims', link: '#', summary: 'Register your team for Friday scrims. Slots limited.', media: null },
  { id: 2, title: 'Patch 1.08 Mobile', date: '2025-10-18', tag: 'Update', link: '#', summary: 'Balance changes and performance improvements.', media: null },
  { id: 3, title: 'Community Cup S3', date: '2025-10-15', tag: 'Tournament', link: '#', summary: 'Season 3 kicks off next month with bigger prizes.', media: null },
]

export const tournaments = [
  { id: 101, name: 'Community Cup S3', status: 'upcoming', startDate: '2025-11-10', endDate: '2025-11-15', banner: '/assets/tournaments/cup-s3.jpg', teams: ['SEN.NP', 'VM Elite', 'KTM Wolves'], winner: null, prize: '$500' },
  { id: 102, name: 'Dash Dash Duel', status: 'ongoing', startDate: '2025-10-22', endDate: '2025-10-29', banner: '/assets/tournaments/ddd.jpg', teams: ['SEN.NP', 'Himalayan5', 'Valkyries'], winner: null, prize: '$300' },
  { id: 103, name: 'Autumn Clash', status: 'finished', startDate: '2025-09-12', endDate: '2025-09-14', banner: '/assets/tournaments/autumn.jpg', teams: ['KTM Wolves', 'VM Elite'], winner: 'KTM Wolves', prize: '$250' },
]

export const teams = [
  { id: 'SEN.NP', name: 'SEN Nepal', logo: '/assets/teams/sen.png', wins: 18, losses: 5, points: 120, socials: { x: '#', yt: '#', ig: '#' } },
  { id: 'KTM', name: 'KTM Wolves', logo: '/assets/teams/ktm.png', wins: 14, losses: 9, points: 98, socials: { x: '#', yt: '#', ig: '#'} },
  { id: 'VME', name: 'VM Elite', logo: '/assets/teams/vme.png', wins: 10, losses: 11, points: 84, socials: { x: '#', yt: '#', ig: '#'} },
]

export const players = [
  { id: 'pl1', name: 'Nyx', team: 'SEN.NP', role: 'Duelist', avatar: '/assets/players/p1.jpg', kda: 1.32, rating: 92, socials: { x: '#', ig: '#'} },
  { id: 'pl2', name: 'Raven', team: 'KTM', role: 'Initiator', avatar: '/assets/players/p2.jpg', kda: 1.18, rating: 87, socials: { x: '#', ig: '#'} },
  { id: 'pl3', name: 'Echo', team: 'VME', role: 'Controller', avatar: '/assets/players/p3.jpg', kda: 1.11, rating: 81, socials: { x: '#', ig: '#'} },
]

export const statsSeries = [
  { name: 'SEN Nepal', wins: 18, points: 120 },
  { name: 'KTM Wolves', wins: 14, points: 98 },
  { name: 'VM Elite', wins: 10, points: 84 },
]