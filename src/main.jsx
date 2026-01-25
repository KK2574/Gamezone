import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import GamePage from './components/GamePage';
import SubwaySuffers from './games/SubwaySuffers/SubwaySuffers';
import BulletForce from './games/BulletForce/BulletForce';
import ShiftHeads from './games/ShiftHeads/ShiftHeads';
import './index.css'; // This must include Tailwind directives
import RedBall4 from './games/RedBall4/RedBall4';
import StickSquad from './games/StickSquad/StickSquad';
import StuntExtreme from './games/StuntExtreme/StuntExtreme';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game/subway" element={<GamePage game={<SubwaySuffers />} />} />
        <Route path="/game/bullet" element={<GamePage game={<BulletForce />} />} />
        <Route path="/game/redball4" element={<GamePage game={<RedBall4 />} />} />
        <Route path="/game/ShiftHeads" element={<GamePage game={<ShiftHeads />} />} />
        <Route path="/game/StickSquad" element={<GamePage game={<StickSquad />} />} />
        <Route path="/game/StuntExtreme" element={<GamePage game={<StuntExtreme />} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
