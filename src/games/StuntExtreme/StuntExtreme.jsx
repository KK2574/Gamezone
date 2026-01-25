import React, { useEffect, useState } from 'react';

const StuntExtreme = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [iframeHtml, setIframeHtml] = useState('');

  const iframeUrl = 'https://g.igroutka.ru/games/793/2xTdm6GrXEuN0Kwq/fe831138-3321-40ed-b8cd-f1c482091e04/index.html';

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const mobileCheck = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const isMobileDevice = (mobileCheck || touchDevice) && window.matchMedia('(max-width: 768px)').matches;
    setIsMobile(isMobileDevice);

    const iframe = `<iframe class="game-iframe" loading="lazy" id="game-area" src="${iframeUrl}" width="100%" height="100%" scrolling="none" frameborder="0" allowfullscreen></iframe>`;
    setIframeHtml(iframe);
  }, []);

  return (
    <div
      className={`game_area_frame ${isMobile ? 'frame_fix_mobile' : ''}`}
      style={{
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '60vh',
        width: '100vh',
        overflow: 'hidden',
        backgroundColor: '#0a0a0a',
        zIndex: 1,
      }}
    >
      <div
        className="game-frame"
        style={{ height: '100%', width: '100%' }}
        dangerouslySetInnerHTML={{ __html: iframeHtml }}
      />
    </div>
  );
};

export default StuntExtreme;
