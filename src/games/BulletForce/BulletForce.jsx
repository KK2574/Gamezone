import React, { useRef } from 'react';

const BulletForce = () => {
  const containerRef = useRef(null);

  const toggleFullscreen = () => {
    const elem = containerRef.current;
    if (!elem) return;

    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.mozFullScreenElement &&
      !document.msFullscreenElement
    ) {
      // Request fullscreen
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          width: '150vh',
          height: '80vh',
          overflow: 'hidden',
          backgroundColor: '#000000',
          color: '#808080',
          fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
          fontSize: '12px',
          textAlign: 'center',
          boxSizing: 'border-box',
        }}
      >
        <iframe
          id="html5"
          width="100%"
          height="100%"
          src="https://www.crazygames.com/embed/bullet-force-multiplayer"
          frameBorder="0"
          scrolling="no"
          title="Bullet Force"
          style={{ display: 'block' }}
          onMouseOver={() => document.getElementById('html5').focus()}
        ></iframe>
      </div>

      <button
        onClick={toggleFullscreen}
        style={{
          marginTop: '8px',
          padding: '8px 16px',
          backgroundColor: '#333',
          color: '#eee',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Toggle Fullscreen
      </button>
    </div>
  );
};

export default BulletForce;
