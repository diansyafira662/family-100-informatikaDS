import React, { useState } from 'react';
import { soundFX } from '../utils/soundFX';

export default function SetupGame({ questionCategories, onStartGame }) {
  const [teamAName, setTeamAName] = useState('TIM A');
  const [teamBName, setTeamBName] = useState('TIM B');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const handleStart = (e) => {
    e.preventDefault();
    soundFX.playFanfare();
    onStartGame({
      teamA: teamAName || 'TIM A',
      teamB: teamBName || 'TIM B',
      category: selectedCategory
    });
  };

  return (
    <div className="modal-overlay" style={{ background: 'rgba(15, 23, 42, 0.95)' }}>
      <div className="modal-content" style={{ maxWidth: '540px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: '#2E9914',
              borderRadius: '16px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '900',
              fontSize: '2rem',
              color: '#fff',
              marginBottom: '10px',
              boxShadow: '0 0 20px rgba(46, 153, 20, 0.5)'
            }}
          >
            100
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FCD34D' }}>
            FAMILY 100 INFORMATIKA
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem', marginTop: '4px' }}>
            Game Kuis Edukasi Komputer & Teknologi Informasi
          </p>
        </div>

        <form onSubmit={handleStart} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 800, marginBottom: '6px', color: '#F8FAFC' }}>
              🔴 Nama Tim A:
            </label>
            <input
              type="text"
              className="answer-input"
              value={teamAName}
              onChange={(e) => setTeamAName(e.target.value)}
              placeholder="Contoh: TIM A / SISWA"
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 800, marginBottom: '6px', color: '#F8FAFC' }}>
              🔵 Nama Tim B:
            </label>
            <input
              type="text"
              className="answer-input"
              value={teamBName}
              onChange={(e) => setTeamBName(e.target.value)}
              placeholder="Contoh: TIM B / GURU"
              required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 800, marginBottom: '6px', color: '#F8FAFC' }}>
              🎯 Topik / Kategori Soal:
            </label>
            <select
              className="answer-input"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="ALL">Semua Kategori Soal (Campuran)</option>
              {questionCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-gold"
            style={{ minHeight: '52px', fontSize: '1.2rem', marginTop: '10px' }}
          >
            🚀 MULAI PERMAINAN
          </button>
        </form>
      </div>
    </div>
  );
}
