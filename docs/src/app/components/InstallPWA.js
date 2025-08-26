// app/components/InstallPWA.js
'use client';

import { useState, useEffect } from 'react';

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('用戶接受了安裝');
    } else {
      console.log('用戶拒絕了安裝');
    }
    
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="install-prompt">
      <div className="install-content">
        <h3>安裝圖片收集站應用</h3>
        <p>添加到主屏幕以便離線使用</p>
        <div className="install-buttons">
          <button className="btn install-btn" onClick={installApp}>
            安裝
          </button>
          <button 
            className="btn cancel-btn" 
            onClick={() => setIsVisible(false)}
          >
            稍後再說
          </button>
        </div>
      </div>
    </div>
  );
}