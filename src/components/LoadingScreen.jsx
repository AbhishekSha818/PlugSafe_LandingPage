import React, { useState, useEffect } from 'react';
import DevicePort from './DevicePort';
import PlugSafeLogo from './PlugSafeLogo';
import soundManager from '../utils/soundManager';

const LoadingScreen = ({ isVisible = true, onLoadingComplete }) => {
  const [status, setStatus] = useState('Scanning device...');
  const [showIcon, setShowIcon] = useState(false);
  const [shouldFadeOut, setShouldFadeOut] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    if (!isVisible) return;
    
    // Resume audio context immediately
    soundManager.resumeAudioContext();
    soundManager.setSoundEnabled(soundEnabled);

    const timings = {
      scanSound: 150,
      connectionSound: 900,
      statusUpdate1: 1800,
      statusUpdate2: 2200,
      fadeOut: 3500,
      complete: 4000,
    };

    const timers = [];
    timers.push(setTimeout(() => { soundManager.playScanSound(); }, timings.scanSound));
    timers.push(setTimeout(() => { soundManager.playConnectionSound(); }, timings.connectionSound));
    timers.push(setTimeout(() => { setStatus('Device connected...'); }, timings.statusUpdate1));
    timers.push(setTimeout(() => {
      setStatus('Verified! Safe to use ✓');
      setShowIcon(true);
      soundManager.playSuccessSound();
    }, timings.statusUpdate2));
    timers.push(setTimeout(() => { setShouldFadeOut(true); }, timings.fadeOut));
    timers.push(setTimeout(() => { if (onLoadingComplete) onLoadingComplete(); }, timings.complete));

    return () => { timers.forEach((timer) => clearTimeout(timer)); };
  }, [isVisible, onLoadingComplete, soundEnabled]);

  const handleSkip = () => {
    setShouldFadeOut(true);
    soundManager.playBeep(600);
    setTimeout(() => { if (onLoadingComplete) onLoadingComplete(); }, 300);
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    soundManager.setSoundEnabled(newState);
    if (newState) soundManager.playBeep(800);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`loading-screen ${shouldFadeOut ? 'fade-out' : ''}`}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#0F0F0F', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 9999, overflow: 'hidden' }}
    >
      <div className="loading-background-glow"></div>

      <div className="loading-content" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '60px', zIndex: 10 }}>
        <div className="device-container" style={{ position: 'relative' }}>
          <DevicePort />
        </div>
        {showIcon && <PlugSafeLogo className="plugsafe-logo-animation" />}
        <div className="status-container">
          <p className="status-text" style={{ fontSize: '18px', fontWeight: '500', color: status.includes('Verified') ? '#77F27E' : '#FFFFFF', textAlign: 'center', minHeight: '24px', letterSpacing: '0.5px', textShadow: status.includes('Verified') ? '0 0 10px rgba(119, 242, 126, 0.5)' : 'none', transition: 'all 0.4s ease' }}>{status}</p>
        </div>
      </div>

      <button onClick={toggleSound} className="sound-toggle-button" title={soundEnabled ? 'Disable sound' : 'Enable sound'} style={{ position: 'absolute', top: '20px', right: '20px', width: '44px', height: '44px', border: '2px solid rgba(119, 242, 126, 0.5)', background: 'transparent', color: soundEnabled ? '#77F27E' : 'rgba(255, 255, 255, 0.3)', borderRadius: '50%', cursor: 'pointer', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', zIndex: 11 }} onMouseEnter={(e) => { e.target.style.borderColor = '#77F27E'; e.target.style.color = '#77F27E'; e.target.style.filter = 'drop-shadow(0 0 8px rgba(119, 242, 126, 0.5))'; }} onMouseLeave={(e) => { e.target.style.borderColor = soundEnabled ? 'rgba(119, 242, 126, 0.5)' : 'rgba(255, 255, 255, 0.3)'; e.target.style.color = soundEnabled ? '#77F27E' : 'rgba(255, 255, 255, 0.3)'; e.target.style.filter = 'none'; }}>
        {soundEnabled ? '🔊' : '🔇'}
      </button>

      {showSkipButton && (
        <button onClick={handleSkip} className="skip-button" style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', padding: '10px 24px', border: '2px solid rgba(255, 255, 255, 0.3)', background: 'transparent', color: 'rgba(255, 255, 255, 0.6)', borderRadius: '24px', cursor: 'pointer', fontSize: '14px', fontWeight: '500', transition: 'all 0.3s ease', zIndex: 11 }} onMouseEnter={(e) => { e.target.style.borderColor = '#77F27E'; e.target.style.color = '#77F27E'; e.target.style.filter = 'drop-shadow(0 0 8px rgba(119, 242, 126, 0.5))'; }} onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'; e.target.style.color = 'rgba(255, 255, 255, 0.6)'; e.target.style.filter = 'none'; }}>
          Skip
        </button>
      )}

      <style jsx>{`
        @keyframes fadeOutScreen { from { opacity: 1; } to { opacity: 0; visibility: hidden; } }
        .loading-screen.fade-out { animation: fadeOutScreen 0.5s ease forwards; }
        @keyframes glowPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
        .loading-background-glow { position: absolute; width: 400px; height: 400px; background: radial-gradient(circle, rgba(119, 242, 126, 0.15) 0%, rgba(119, 242, 126, 0.05) 50%, transparent 100%); borderRadius: 50%; top: 50%; left: 50%; transform: translate(-50%, -50%); animation: glowPulse 3s ease-in-out infinite; pointerEvents: none; }
        .sound-toggle-button:focus { outline: none; }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
