import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import NewsTicker from "./components/NewsTicker.jsx";
import TournamentSection from "./components/TournamentSection.jsx";
import LeaderboardSection from "./components/LeaderboardSection.jsx";
import ProfilesSection from "./components/ProfilesSection.jsx";
import NewsSection from "./components/NewsSection.jsx";
import Footer from "./components/Footer.jsx";
import AuthModal from "./components/AuthModal.jsx";
import TournamentDetails from "./pages/TournamentDetails.jsx";
import { supabase } from "./supabaseClient";

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setAuthLoaded(true);
    };
    fetchUser();

    const result = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setAuthLoaded(true);
    });
    return () => {
      if (result && result.subscription && typeof result.subscription.unsubscribe === "function") {
        result.subscription.unsubscribe();
      }
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setAuthOpen(false);
  };

  if (!authLoaded) {
    return <div style={{
      color: "white",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-surface-900">
      {user && (
        <div className="fixed top-3 right-3 bg-surface-900/80 rounded-xl py-2 px-4 flex items-center gap-2 z-50 shadow-lg ring-1 ring-black/30 backdrop-blur">
          <img
            src={user.user_metadata?.avatar_url || '/assets/avatar.svg'}
            alt="avatar"
            className="h-8 w-8 rounded-full"
            onError={e => { e.target.style.display = 'none'; }}
          />
          <div>
            <div className="font-semibold text-white">
              {user.user_metadata?.full_name || user.user_metadata?.user_name || user.email}
            </div>
            <div className="text-xs text-white/70">{user.email}</div>
          </div>
          <button
            className="ml-4 px-3 py-1 rounded bg-primary text-white text-sm hover:opacity-80"
            onClick={handleLogout}>
            Log out
          </button>
        </div>
      )}

      <Navbar onLogin={() => { if (!user) setAuthOpen(true); }} user={user} />
      <Routes>
        <Route
          path="/"
          element={
            <main className="overflow-x-hidden">
              <section id="home">
                <Hero onJoin={() => { if (!user) setAuthOpen(true); }} />
                <NewsTicker />
              </section>
              <section id="tournaments" className="py-16 md:py-24">
                <TournamentSection />
              </section>
              <section id="leaderboard" className="py-16 md:py-24 bg-surface-800/60">
                <LeaderboardSection />
              </section>
              <section id="profiles" className="py-16 md:py-24">
                <ProfilesSection />
              </section>
              <section id="news" className="py-16 md:py-24 bg-surface-800/60">
                <NewsSection />
              </section>
              <Footer />
            </main>
          }
        />
        {/* This details page is what lets "View Details" show the tournament info */}
        <Route path="/tournaments/:id" element={<TournamentDetails />} />
      </Routes>
      {!user && authOpen && (
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      )}
    </div>
  );
}

export default App;