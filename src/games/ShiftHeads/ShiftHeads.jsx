import React, { useRef, useState } from 'react';

const ShiftHeads = () => {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) => console.error('Fullscreen request failed:', err));
    } else {
      document.exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch((err) => console.error('Exiting fullscreen failed:', err));
    }
  };

  return (
    <div>
      <button
        onClick={toggleFullscreen}
        style={{
          marginBottom: '10px',
          padding: '10px 20px',
          backgroundColor: '#0e2031',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0,0,0,0.2)'
        }}
      >
        ToggleFullscreen
      </button>

      <div
        ref={containerRef}
        style={{
          width: '100vh',
          height: '60vh',
          overflow: 'hidden',
          border: '1px solid #ccc',
          position: 'relative',
          backgroundColor: '#000',
          color: '#808080',
          fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
          fontSize: '12px',
          textAlign: 'center'
        }}
      >
        <iframe
          id="ruffle"
          width="100%"
          height="100%"
          src="https://f.silvergames.com/ruffle/player.php?id=8343"
          frameBorder="0"
          scrolling="no"
          title="Shift Heads Game"
        ></iframe>
      </div>
    </div>
  );
};

export default ShiftHeads;
