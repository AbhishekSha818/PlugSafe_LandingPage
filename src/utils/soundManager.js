/**
 * Sound Manager - Handles all audio effects for the loading screen
 * Supports sound effects with fallback for browsers that don't support Web Audio API
 */

class SoundManager {
  constructor() {
    this.audioContext = null;
    this.soundEnabled = true;
    this.masterVolume = 0.3;
    this.initAudioContext();
  }

  initAudioContext() {
    try {
      if (!this.audioContext && typeof window !== 'undefined') {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.audioContext = new AudioContext();
          console.log('Audio context initialized, state:', this.audioContext.state);
        } else {
          console.warn('Web Audio API not available in this browser');
        }
      }
    } catch (e) {
      console.warn('Web Audio API not available:', e);
    }
  }

  resumeAudioContext() {
    if (!this.audioContext) {
      this.initAudioContext();
    }
    if (this.audioContext && this.audioContext.state === 'suspended') {
      this.audioContext.resume().catch(e => {
        console.warn('Failed to resume audio context:', e);
      });
      return 'suspended';
    }
    return 'running';
  }

  setSoundEnabled(enabled) {
    this.soundEnabled = enabled;
  }

  setVolume(volume) {
    this.masterVolume = Math.max(0, Math.min(1, volume));
  }

  playScanSound() {
    if (!this.soundEnabled) return;
    if (!this.audioContext) {
      console.warn('Audio context not initialized for scan sound');
      return;
    }
    try {
      this.resumeAudioContext(); // Ensure context is resumed
      const now = this.audioContext.currentTime;
      const duration = 0.4;
      const endTime = now + duration;

      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(600, endTime);

      gain.gain.setValueAtTime(this.masterVolume * 0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, endTime);

      osc.start(now);
      osc.stop(endTime);
      console.log('Scan sound played');
    } catch (e) {
      console.warn('Error playing scan sound:', e);
    }
  }

  playConnectionSound() {
    if (!this.soundEnabled) return;
    if (!this.audioContext) {
      console.warn('Audio context not initialized for connection sound');
      return;
    }
    try {
      this.resumeAudioContext(); // Ensure context is resumed
      const now = this.audioContext.currentTime;
      const beepDuration = 0.08;
      const gapDuration = 0.04;

      for (let i = 0; i < 3; i++) {
        const beepStart = now + i * (beepDuration + gapDuration);
        const beepEnd = beepStart + beepDuration;

        const osc = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        osc.connect(gain);
        gain.connect(this.audioContext.destination);

        osc.frequency.setValueAtTime(600 + i * 100, beepStart);
        gain.gain.setValueAtTime(this.masterVolume * 0.5, beepStart);
        gain.gain.exponentialRampToValueAtTime(0.01, beepEnd);

        osc.start(beepStart);
        osc.stop(beepEnd);
      }
      console.log('Connection sound played');
    } catch (e) {
      console.warn('Error playing connection sound:', e);
    }
  }

  playSuccessSound() {
    if (!this.soundEnabled) return;
    if (!this.audioContext) {
      console.warn('Audio context not initialized for success sound');
      return;
    }
    try {
      this.resumeAudioContext(); // Ensure context is resumed
      const now = this.audioContext.currentTime;
      const duration = 0.5;
      const endTime = now + duration;

      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1200, endTime);

      gain.gain.setValueAtTime(this.masterVolume * 0.6, now);
      gain.gain.exponentialRampToValueAtTime(0.01, endTime);

      osc.start(now);
      osc.stop(endTime);

      const osc2 = this.audioContext.createOscillator();
      const gain2 = this.audioContext.createGain();
      osc2.connect(gain2);
      gain2.connect(this.audioContext.destination);

      osc2.frequency.setValueAtTime(1600, now);
      osc2.frequency.exponentialRampToValueAtTime(2400, endTime);

      gain2.gain.setValueAtTime(this.masterVolume * 0.3, now);
      gain2.gain.exponentialRampToValueAtTime(0.01, endTime);

      osc2.start(now);
      osc2.stop(endTime);
      console.log('Success sound played');
    } catch (e) {
      console.warn('Error playing success sound:', e);
    }
  }

  playErrorSound() {
    if (!this.soundEnabled || !this.audioContext) return;
    try {
      const now = this.audioContext.currentTime;
      const duration = 0.3;
      const endTime = now + duration;

      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, endTime);

      gain.gain.setValueAtTime(this.masterVolume * 0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.01, endTime);

      osc.start(now);
      osc.stop(endTime);
    } catch (e) {
      console.warn('Error playing error sound:', e);
    }
  }

  playBeep(frequency = 800) {
    if (!this.soundEnabled || !this.audioContext) return;
    try {
      const now = this.audioContext.currentTime;
      const duration = 0.2;
      const endTime = now + duration;

      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();
      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      osc.frequency.setValueAtTime(frequency, now);
      gain.gain.setValueAtTime(this.masterVolume * 0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.01, endTime);

      osc.start(now);
      osc.stop(endTime);
    } catch (e) {
      console.warn('Error playing beep:', e);
    }
  }
}

const soundManager = new SoundManager();
export default soundManager;
