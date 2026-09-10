import React, { useState, useEffect } from 'react';
import { soundFX } from '../utils/soundFX';

export default function Header({
  isOnline,
  onOpenQR,
  onOpenEditor,
  onOpenShortcuts,
  onResetGame,
  deferredInstallPrompt,
  onInstallPWA
}) {
  const [muted, setMuted] = useState(soundFX.muted);

  const toggleSound = () => {
    const nextState = soundFX.toggleMute();
    setMuted(nextState);
  };

  return (
    <header className="header">
      <div className="header-brand">
        <div className="header-logo">100</div>
        <div>
          <h1 className="header-title">Family 100 Informatika</h1>
        </div>
      </div>

      <div className="header-badges">
        <span className={`badge ${isOnline ? 'badge-online' : 'badge-offline'}`}>
          {isOnline ? '🟢 ONLINE' : '🟠 OFFLINE'}
        </span>
      </div>

      <div className="header-actions">
        {deferredInstallPrompt && (
          <button className="btn btn-gold" onClick={onInstallPWA} title="Install Aplikasi">
            📲 Install PWA
          </button>
        )}

        <button className="btn btn-secondary" onClick={onOpenQR} title="Tampilkan QR Code">
          📱 QR Code
        </button>

        <button className="btn btn-secondary" onClick={onOpenEditor} title="Bank Soal">
          📚 Kelola Soal
        </button>

        <button className="btn btn-secondary" onClick={onOpenShortcuts} title="Keyboard Shortcuts">
          ⌨️ Shortcuts
        </button>

        <button className="btn btn-secondary btn-icon" onClick={toggleSound} title="Suara FX">
          {muted ? '🔇' : '🔊'}
        </button>

        <button className="btn btn-secondary btn-icon" onClick={onResetGame} title="Reset Permainan">
          🔄
        </button>
      </div>
    </header>
  );
}
