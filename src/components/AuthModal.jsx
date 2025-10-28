import React from 'react';
import { supabase } from '../supabaseClient';
export default function AuthModal({ open, onClose }) {
  const handleDiscordLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'discord' });
  };
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)",
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{
        background: "#23272a", color: "white", borderRadius: 12, padding: 24, minWidth: 320,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 16
      }}>
        <h2>Login Required</h2>
        <button onClick={handleDiscordLogin}
          style={{
            padding: "12px 24px",
            background: "#5865F2",
            border: "none",
            borderRadius: 8,
            color: "#fff",
            fontWeight: "bold"
          }}>Login with Discord</button>
        <button onClick={onClose}
          style={{
            background: "none", color: "#aaa", border: "none", cursor: "pointer"
          }}>Close</button>
      </div>
    </div>
  );
}