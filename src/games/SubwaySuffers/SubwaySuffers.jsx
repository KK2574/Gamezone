import React, { useState, useRef } from 'react';

const SubwaySuffers = ({ }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const gameRef = useRef(null);

  const startGameFrame = () => {
    setGameStarted(true);
  };

  const toggleFullscreen = () => {
    if (gameRef.current) {
      if (!document.fullscreenElement) {
        gameRef.current.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div style={{ position: 'relative', height: '70vh', width: '50vw' }} ref={gameRef}>
      {!gameStarted ? (
        <div style={styles.beforePlaying}>
          <div style={styles.blurBackground} />
          <div style={styles.preloadBeforePlaying}>
            <div style={styles.imageThumbnailPlaying}>
              <img
                width="135px"
                height="135px"
                src="/upload/cache/upload/imgs/subway-surfers-game-m135x135.png"
                alt="Subway Surfers Thumbnail"
                style={{ borderRadius: '70px', boxShadow: '0 0 5px 2px rgba(0,0,0,0.2)' }}
              />
            </div>
            <div style={styles.playTitle}>Subway Surfers</div>
            <div style={styles.titleGamePlaying}>
              <button onClick={startGameFrame} style={styles.playButton}>
                Ok, PLAY NOW!
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <button onClick={toggleFullscreen} style={styles.fullscreenButton}>
            Toggle Fullscreen
          </button>
          <iframe
            id="iframehtml5"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            title="Subway Surfers"
            src="https://szhong.4399.com/4399swf//upload_swf/ftp35/liuxinyu/20210324/jj01/index.html"
          />
        </>
      )}
    </div>
  );
};

const styles = {
  beforePlaying: {
    position: 'relative',
    top: 0,
    height:'60vh',
    width:'50vw',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurBackground: {
    backgroundImage: "url('/upload/cache/upload/imgs/subway-surfers-game-h180x135.png')",
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.7,
    width: '100%',
    height: '100%',
    transform: 'scale(1.3)',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(20px)',
  },
  preloadBeforePlaying: {
    padding: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#fff',
  },
  playTitle: {
    margin: '35px auto 15px',
    fontSize: '24px',
    textTransform: 'capitalize',
    textShadow: '-1px 0 7px rgba(6,29,98,0.3), 0 1px 7px rgba(6,29,98,0.3), 1px 0 7px rgba(6,29,98,0.3), 0 -1px 7px rgba(6,29,98,0.3)',
  },
  titleGamePlaying: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    width: '200px',
    height: '50px',
    borderRadius: '10px',
    boxShadow: 'inset 0 2px 4px 0 hsla(0,0%,100%,0.38), inset 0 -3px 3px 0 rgba(0,0,0,0.2), 0 8px 15px 0 rgba(6,29,98,0.5)',
    backgroundColor: '#f15a24',
    fontSize: '18px',
    color: '#fff',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    padding: '12px 0',
    transition: '0.4s ease-out',
  },
  fullscreenButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#f15a24',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 10,
  },
};

export default SubwaySuffers;
