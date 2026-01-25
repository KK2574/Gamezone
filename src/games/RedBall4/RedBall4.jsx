import React, { useRef } from 'react';

const RedBall4 = () => {
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
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
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
        className="w-[133vh] h-[88vh] object-cover bg-black text-gray-400 font-sans text-center relative"
      >
        <iframe
          id="html5"
          src="https://html5.gamemonetize.com/uhti3rj4s69rljjuoq8ufjcbc4onq0ak/"
          className="w-full h-full border-none"
          scrolling="no"
          title="Red Ball 4 Game"
        />
      </div>

      <button
        onClick={toggleFullscreen}
        className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        type="button"
      >
        Toggle Fullscreen
      </button>
    </div>
  );
};

export default RedBall4;
