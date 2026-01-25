import React from 'react';
import App from '../App';

const GamePage = ({ game }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1a] to-[#1a1a2e] text-white font-sans px-6 py-8">
      <div className="flex flex-col items-center space-y-10">
        <div className="w-full max-w-6xl p-4 rounded-xl shadow-[0_0_25px_#22d3ee] border-2 border-cyan-400 bg-[#0d1117]">
          {game}
        </div>

        <div className="w-full max-w-6xl">
          <h2 className="text-2xl font-bold mb-4 text-cyan-300 text-center uppercase tracking-widest">
            More Games
          </h2>
          <App />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
