import { Link } from 'react-router-dom';
import subwaysurfers from './assets/subwaysufers.jpeg';
import bulletforce from './assets/bulletforce.png';
import RedBall4 from './assets/RedBall4.png';
import ShiftHeads from './assets/ShiftHeads.png';
import StickSquad from './assets/StickSquad.png';
import StuntExtreme from './assets/StuntExtreme.png';
import AmongUs from './assets/AmongUs.png';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-white font-sans px-4 py-8">
      <h1 className="text-center text-4xl font-extrabold mb-10 tracking-wider text-cyan-400">
        🎮 Game Zone 🎮
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        <Link to="/game/subway">
          <img
            src={subwaysurfers}
            alt="subwaysurfers"
            className="w-64 h-64 object-cover rounded-2xl border-4 border-cyan-500 shadow-[0_0_15px_#22d3ee] hover:scale-105 hover:border-cyan-300 transition-all duration-300"
          />
        </Link>
        <Link to="/game/bullet">
          <img
            src={bulletforce}
            alt="bulletforce"
            className="w-64 h-64 object-cover rounded-2xl border-4 border-pink-400 shadow-[0_0_15px_#f472b6] hover:scale-105 hover:border-pink-300 transition-all duration-300"
          />
        </Link>
        <Link to="/game/redball4">
          <img
            src={RedBall4}
            alt="RedBall4"
            className="w-64 h-64 object-cover rounded-2xl border-4 border-red-400 shadow-[0_0_15px_#f87171] hover:scale-105 hover:border-red-300 transition-all duration-300"
          />
        </Link>

        <Link to="/game/ShiftHeads">
          <img
            src={ShiftHeads}
            alt="ShiftHeads"
            className="w-64 h-64 object-cover rounded-2xl border-4 border-gray-400 shadow-[0_0_15px_#94a3b8] hover:scale-105 hover:border-white transition-all duration-300"
          />
        </Link>
        <Link to="/game/StickSquad">
          <img
            src={StickSquad}
            alt="StickSquad"
            className="w-64 h-64 object-cover rounded-2xl border-4 border-gray-400 shadow-[0_0_15px_#94a3b8] hover:scale-105 hover:border-white transition-all duration-300"
          />
        </Link>
        <Link to="/game/StuntExtreme">
          <img
            src={StuntExtreme}
            alt="StuntExtreme"
            className="w-64 h-64 object-cover rounded-2xl border-4 border-gray-400 shadow-[0_0_15px_#94a3b8] hover:scale-105 hover:border-white transition-all duration-300"
          />
        </Link>

      </div>
    </div>

  );
};

export default App;
