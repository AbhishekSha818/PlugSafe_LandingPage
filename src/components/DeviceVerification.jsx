import React, { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';

const DeviceVerification = () => {
  // State management
  const [isVerified, setIsVerified] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [usbPosition, setUsbPosition] = useState({ x: 24, y: 0 });
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [plugSafeHighlight, setPlugSafeHighlight] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false); // For snap-back animation
  const [isSnappedToPlugSafe, setIsSnappedToPlugSafe] = useState(false); // Magnetic snap tracking

  // Refs
  const containerRef = useRef(null);
  const usbRef = useRef(null);
  const plugSafeRef = useRef(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const startPositionRef = useRef({ x: 24, y: 0 }); // Track start position

  // Initialize positions on mount
  useEffect(() => {
    const resetPositions = () => {
      setIsVerified(false);
      setShowCheckmark(false);
      // Initialize USB in center vertically with left gap matching PlugSafe right gap
      // Using approximate gap values: 24px (sm:40px, md:48px) converted to approximate pixel
      setUsbPosition({ x: 24, y: 0 });
      startPositionRef.current = { x: 24, y: 0 };
      setPlugSafeHighlight(false);
      setShouldAnimate(false);
      setIsSnappedToPlugSafe(false);
    };

    resetPositions();
  }, []);

  // Setup document-level mouse event listeners for smooth dragging
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, usbPosition, isVerified]);

  // Play success sound
  const playSuccessSound = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800; // Hz (pitch)
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (err) {
      console.log('Audio not available:', err);
    }
  };

  // Collision detection
  const detectCollision = (usbPos, plugSafePos) => {
    const usbCenter = { x: usbPos.x + 30, y: usbPos.y + 50 };
    const plugSafeCenter = { x: plugSafePos.x + 60, y: plugSafePos.y + 40 };

    const distance = Math.sqrt(
      Math.pow(usbCenter.x - plugSafeCenter.x, 2) +
        Math.pow(usbCenter.y - plugSafeCenter.y, 2)
    );

    return distance < 30; // 30px threshold (MODERATE)
  };

  // Check proximity for highlighting
  const checkProximity = (usbPos, plugSafePos) => {
    const usbCenter = { x: usbPos.x + 30, y: usbPos.y + 50 };
    const plugSafeCenter = { x: plugSafePos.x + 60, y: plugSafePos.y + 40 };

    const distance = Math.sqrt(
      Math.pow(usbCenter.x - plugSafeCenter.x, 2) +
        Math.pow(usbCenter.y - plugSafeCenter.y, 2)
    );

    return distance < 80; // Highlight at 80px proximity
  };

  // Mouse down - start drag
  const handleMouseDown = (e) => {
    // Prevent dragging if USB is already verified (locked)
    if (isVerified) return;

    const rect = usbRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    dragOffsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    setIsDragging(true);
  };

  // Mouse move - follow mouse (X only, Y stays centered)
  const handleMouseMove = (e) => {
    // If verified, USB is locked - don't move
    if (isVerified) return;
    
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left - dragOffsetRef.current.x;

    // Constrain to container (X only)
    const constrainedX = Math.max(0, Math.min(x, containerRect.width - 60));

    // Check proximity to PlugSafe for magnetic effect
    if (plugSafeRef.current) {
      const plugSafeRect = plugSafeRef.current.getBoundingClientRect();
      const plugSafePos = {
        x: plugSafeRect.left - containerRect.left,
        y: plugSafeRect.top - containerRect.top,
      };

      const containerCenterY = containerRect.height / 2;
      
      // Calculate distance to PlugSafe center
      const usbCenter = { x: constrainedX + 30, y: containerCenterY };
      const plugSafeCenter = { x: plugSafePos.x + 60, y: plugSafePos.y + 40 };
      const distance = Math.sqrt(
        Math.pow(usbCenter.x - plugSafeCenter.x, 2) +
          Math.pow(usbCenter.y - plugSafeCenter.y, 2)
      );

      // Magnetic range: 80px
      if (distance < 80) {
        // MAGNET ACTIVE - Snap USB to PlugSafe center
        const usbStickX = plugSafePos.x + 30; // Center USB on PlugSafe
        setUsbPosition({ x: usbStickX, y: 0 });
        setIsSnappedToPlugSafe(true);
        setPlugSafeHighlight(true);
      } else {
        // Outside magnetic range - normal dragging
        setUsbPosition({ x: constrainedX, y: 0 });
        setIsSnappedToPlugSafe(false);
        setPlugSafeHighlight(false);
      }
    }
  };

  // Mouse up - drop
  const handleMouseUp = (e) => {
    if (!isDragging) return;

    setIsDragging(false);
    setShouldAnimate(false);

    // If snapped to PlugSafe, verify immediately
    if (isSnappedToPlugSafe) {
      // Successful verification - USB sticks to PlugSafe
      setIsVerified(true);
      setShowCheckmark(true);
      playSuccessSound();
      setIsSnappedToPlugSafe(true); // Keep snapped state
    } else {
      // Not snapped - snap USB back to start position with animation
      setShouldAnimate(true);
      setUsbPosition(startPositionRef.current);
      setIsSnappedToPlugSafe(false);
    }

    setPlugSafeHighlight(false);
  };

  // Mouse leave container
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setUsbPosition({ x: 0, y: 0 });
      setPlugSafeHighlight(false);
    }
  };

  // Touch support
  const handleTouchStart = (e) => {
    const rect = usbRef.current.getBoundingClientRect();
    const touch = e.touches[0];

    dragOffsetRef.current = {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };

    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    // If verified, USB is locked - don't move
    if (isVerified) return;
    
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - containerRect.left - dragOffsetRef.current.x;

    const constrainedX = Math.max(0, Math.min(x, containerRect.width - 60));

    // Check proximity to PlugSafe for magnetic effect
    if (plugSafeRef.current) {
      const plugSafeRect = plugSafeRef.current.getBoundingClientRect();
      const plugSafePos = {
        x: plugSafeRect.left - containerRect.left,
        y: plugSafeRect.top - containerRect.top,
      };

      const containerCenterY = containerRect.height / 2;
      
      // Calculate distance to PlugSafe center
      const usbCenter = { x: constrainedX + 30, y: containerCenterY };
      const plugSafeCenter = { x: plugSafePos.x + 60, y: plugSafePos.y + 40 };
      const distance = Math.sqrt(
        Math.pow(usbCenter.x - plugSafeCenter.x, 2) +
          Math.pow(usbCenter.y - plugSafeCenter.y, 2)
      );

      // Magnetic range: 80px
      if (distance < 80) {
        // MAGNET ACTIVE - Snap USB to PlugSafe center
        const usbStickX = plugSafePos.x + 30; // Center USB on PlugSafe
        setUsbPosition({ x: usbStickX, y: 0 });
        setIsSnappedToPlugSafe(true);
        setPlugSafeHighlight(true);
      } else {
        // Outside magnetic range - normal dragging
        setUsbPosition({ x: constrainedX, y: 0 });
        setIsSnappedToPlugSafe(false);
        setPlugSafeHighlight(false);
      }
    }
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;

    setIsDragging(false);
    setShouldAnimate(false);

    // If snapped to PlugSafe, verify immediately
    if (isSnappedToPlugSafe) {
      // Successful verification - USB sticks to PlugSafe
      setIsVerified(true);
      setShowCheckmark(true);
      playSuccessSound();
      setIsSnappedToPlugSafe(true); // Keep snapped state
    } else {
      // Not snapped - snap USB back to start position with animation
      setShouldAnimate(true);
      setUsbPosition(startPositionRef.current);
      setIsSnappedToPlugSafe(false);
    }

    setPlugSafeHighlight(false);
  };

  return (
    <div className="flex items-center justify-center min-h-96 sm:min-h-96 md:min-h-screen md:pb-20">
      <div className="w-full max-w-3xl px-4">
        {/* Main container */}
        <div
          ref={containerRef}
          className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-50 dark:bg-slate-800 rounded-3xl border-2 border-dashed border-gray-300 dark:border-slate-700 transition-all duration-300 overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 via-blue-500/5 to-primary-green/5 rounded-3xl"></div>

           {/* USB Device */}
           <div
             ref={usbRef}
             className={`absolute z-20 select-none top-1/2 transform -translate-y-1/2 ${
               isVerified ? 'cursor-not-allowed' : 'cursor-grab active:cursor-grabbing'
             } ${
               isDragging ? 'opacity-90' : 'opacity-100'
             }`}
             style={{
               left: `${usbPosition.x}px`,
               transform: isDragging ? 'scale(1.05) translateY(-50%)' : 'translateY(-50%)',
               transition: isDragging 
                 ? 'opacity 0.1s ease-out' 
                 : shouldAnimate 
                 ? 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                 : 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
               filter: isSnappedToPlugSafe ? 'drop-shadow(0 0 15px rgba(74, 222, 128, 0.6))' : 'none',
             }}
             onMouseDown={handleMouseDown}
             onTouchStart={handleTouchStart}
           >
             {/* USB Device Visual */}
             <div className={`w-12 sm:w-14 md:w-16 h-20 sm:h-24 md:h-28 rounded-lg shadow-lg flex flex-col items-center justify-start p-2 border-2 transition-all duration-200 relative ${
               isSnappedToPlugSafe
                 ? 'bg-gradient-to-b from-green-300 to-green-400 dark:from-green-600 dark:to-green-700 border-primary-green'
                 : 'bg-gradient-to-b from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 border-slate-400 dark:border-slate-600'
              }`}>
                {/* USB Port */}
                <div className="w-6 sm:w-7 md:w-8 h-3 sm:h-4 bg-yellow-600 rounded-sm mt-2 shadow-inner"></div>

               {/* USB Icon */}
               <div className="text-xl sm:text-2xl md:text-3xl mt-2">⚡</div>

               {/* USB Label */}
               <div className={`text-xs sm:text-sm font-bold transition-colors duration-200 mt-auto mb-1 ${
                 isSnappedToPlugSafe
                   ? 'text-white'
                   : 'text-slate-700 dark:text-slate-200'
               }`}>
                 USB
               </div>
             </div>
           </div>

           {/* PlugSafe Device */}
           <div
             ref={plugSafeRef}
             className={`absolute z-10 right-6 sm:right-10 md:right-12 top-1/2 transform -translate-y-1/2 transition-all duration-200 ${
               isVerified ? 'glow-pulse-green' : isSnappedToPlugSafe ? 'glow-magnet-active' : plugSafeHighlight ? 'glow-highlight-green' : 'glow-default'
             }`}
           >
             {/* PlugSafe Device Visual */}
             <div className={`w-24 sm:w-28 md:w-32 h-16 sm:h-20 md:h-24 rounded-xl shadow-lg flex flex-col items-center justify-center border-2 transition-all duration-200 ${
               isVerified
                 ? 'bg-primary-green border-primary-green'
                 : isSnappedToPlugSafe
                 ? 'bg-primary-green/30 border-primary-green scale-105'
                 : plugSafeHighlight
                 ? 'bg-primary-green/20 border-primary-green'
                 : 'bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 border-slate-400 dark:border-slate-600'
             }`}
             style={{
               boxShadow: isVerified
                 ? '0 0 30px rgba(74, 222, 128, 0.8), 0 0 60px rgba(74, 222, 128, 0.4)'
                 : isSnappedToPlugSafe
                 ? '0 0 40px rgba(74, 222, 128, 0.7), 0 0 80px rgba(74, 222, 128, 0.4), inset 0 0 20px rgba(74, 222, 128, 0.3)'
                 : plugSafeHighlight
                 ? '0 0 20px rgba(74, 222, 128, 0.5), inset 0 0 10px rgba(74, 222, 128, 0.2)'
                 : '0 0 10px rgba(0, 0, 0, 0.1)',
             }}
             >
              {/* Port Slot */}
              <div className="w-16 sm:w-20 md:w-24 h-8 sm:h-10 md:h-12 bg-slate-800 dark:bg-slate-950 rounded-lg shadow-inner flex items-center justify-center relative border border-slate-900 dark:border-slate-800">
                {/* Connection lines */}
                <div className="absolute w-2 h-1 bg-yellow-400 rounded-full left-2"></div>
                <div className="absolute w-2 h-1 bg-red-400 rounded-full left-1/2 transform -translate-x-1/2"></div>
                <div className="absolute w-2 h-1 bg-black rounded-full right-2"></div>

                {/* Status indicator inside */}
                {isVerified && (
                  <div className="absolute animate-checkmark-bounce">
                    <Check
                      size={24}
                      className="text-white drop-shadow-lg"
                      strokeWidth={3}
                    />
                  </div>
                )}
              </div>

              {/* PlugSafe Label */}
              <div className={`text-xs sm:text-sm font-bold mt-2 transition-colors duration-300 ${
                isVerified
                  ? 'text-white'
                  : 'text-slate-700 dark:text-slate-300'
              }`}>
                PlugSafe
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicator (Switch-like) */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
          <div className="relative w-48 sm:w-56 md:w-64 h-12 sm:h-14 bg-gray-200 dark:bg-slate-700 rounded-full border-2 border-gray-300 dark:border-slate-600 flex items-center transition-all duration-300 overflow-visible">
            {/* Left label - Unverified (ALWAYS VISIBLE on top) */}
            <div className={`absolute left-0 w-1/2 h-full flex items-center justify-center text-xs sm:text-sm font-bold transition-colors duration-500 pointer-events-none z-20 drop-shadow-lg ${
              isVerified ? 'text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'
            }`}>
              ○ Unverified
            </div>

            {/* Right label - Safe (ALWAYS VISIBLE on top) */}
            <div className={`absolute right-0 w-1/2 h-full flex items-center justify-center text-xs sm:text-sm font-bold transition-colors duration-500 pointer-events-none z-20 drop-shadow-lg ${
              isVerified ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-500'
            }`}>
              Safe ✓
            </div>

            {/* Animated indicator - Behind labels with transparency */}
             <div
               className={`absolute left-0 w-1/2 h-full rounded-full transition-all duration-500 flex items-center justify-center font-bold text-lg sm:text-xl z-10 ${
                 isVerified
                   ? 'translate-x-full bg-gradient-to-r from-primary-green to-green-500 text-white shadow-lg shadow-primary-green/50'
                   : 'bg-red-500 text-white shadow-lg shadow-red-500/50'
               }`}
               style={{
                 transform: isVerified ? 'translateX(100%)' : 'translateX(0)',
                 opacity: 0.7,
               }}
             >
             </div>
          </div>
        </div>

        {/* Hint Text */}
        <div className={`mt-4 sm:mt-6 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-500 italic transition-opacity duration-500 ${
          isDragging ? 'opacity-20' : 'opacity-40'
        }`}>
          Please plug USB device to our PlugSafe
        </div>

        {/* Verification Message */}
        {isVerified && (
          <div className="mt-4 sm:mt-6 text-center animate-fade-in">
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-primary-green/10 border border-primary-green rounded-lg">
              <p className="text-sm sm:text-base font-semibold text-primary-green">
                ✓ Device Verified - Safe to Use
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceVerification;
