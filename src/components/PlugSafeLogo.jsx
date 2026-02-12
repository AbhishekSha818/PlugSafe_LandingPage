import React from 'react';

const PlugSafeLogo = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 200 240"
      width="180"
      height="216"
      className={`plugsafe-logo ${className}`}
      style={{
        filter: 'drop-shadow(0 0 20px rgba(119, 242, 126, 0.6))',
      }}
    >
      {/* Outer Shield - Main container */}
      <g id="shield-outer">
        <path
          d="M 100 20 L 160 50 L 160 120 Q 160 180 100 220 Q 40 180 40 120 L 40 50 Z"
          fill="none"
          stroke="#77F27E"
          strokeWidth="3"
          strokeLinejoin="round"
          opacity="0.9"
        />
      </g>

      {/* Inner Shield Background */}
      <g id="shield-inner">
        <path
          d="M 100 20 L 160 50 L 160 120 Q 160 180 100 220 Q 40 180 40 120 L 40 50 Z"
          fill="rgba(119, 242, 126, 0.08)"
          stroke="none"
        />
      </g>

      {/* USB Pendrive Icon - Center */}
      <g id="usb-icon" className="usb-icon-animate">
        {/* Pendrive connector */}
        <rect
          x="82"
          y="60"
          width="36"
          height="18"
          rx="3"
          fill="#FFD700"
          stroke="#F59E0B"
          strokeWidth="1"
          opacity="0.95"
        />

        {/* Pendrive body */}
        <rect
          x="75"
          y="75"
          width="50"
          height="50"
          rx="8"
          fill="none"
          stroke="#77F27E"
          strokeWidth="2"
          opacity="0.9"
        />

        {/* Pendrive highlight */}
        <rect
          x="75"
          y="75"
          width="50"
          height="12"
          rx="8"
          fill="#77F27E"
          opacity="0.3"
        />
      </g>

      {/* Checkmark - Verification mark */}
      <g id="checkmark-icon" className="checkmark-animate">
        {/* Checkmark path */}
        <path
          d="M 95 125 L 105 135 L 130 110"
          fill="none"
          stroke="#77F27E"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
      </g>

      {/* Lock Icon - Bottom for security */}
      <g id="lock-icon" className="lock-animate">
        {/* Lock body */}
        <rect
          x="85"
          y="150"
          width="30"
          height="28"
          rx="4"
          fill="none"
          stroke="#77F27E"
          strokeWidth="2"
          opacity="0.85"
        />

        {/* Lock shackle */}
        <path
          d="M 90 150 Q 90 135 100 135 Q 110 135 110 150"
          fill="none"
          stroke="#77F27E"
          strokeWidth="2"
          opacity="0.85"
        />

        {/* Lock hole */}
        <circle cx="100" cy="162" r="2.5" fill="#77F27E" opacity="0.8" />
      </g>

      {/* Circuit board pattern - sides */}
      <g id="circuits-left" opacity="0.6">
        {/* Left side circuit lines */}
        <circle cx="55" cy="80" r="2.5" fill="#77F27E" opacity="0.7" />
        <circle cx="55" cy="110" r="2.5" fill="#77F27E" opacity="0.7" />
        <circle cx="55" cy="140" r="2.5" fill="#77F27E" opacity="0.7" />

        <line x1="55" y1="80" x2="65" y2="80" stroke="#77F27E" strokeWidth="1.5" opacity="0.6" />
        <line x1="55" y1="110" x2="65" y2="110" stroke="#77F27E" strokeWidth="1.5" opacity="0.6" />
        <line x1="55" y1="140" x2="65" y2="140" stroke="#77F27E" strokeWidth="1.5" opacity="0.6" />
      </g>

      <g id="circuits-right" opacity="0.6">
        {/* Right side circuit lines */}
        <circle cx="145" cy="80" r="2.5" fill="#77F27E" opacity="0.7" />
        <circle cx="145" cy="110" r="2.5" fill="#77F27E" opacity="0.7" />
        <circle cx="145" cy="140" r="2.5" fill="#77F27E" opacity="0.7" />

        <line x1="145" y1="80" x2="135" y2="80" stroke="#77F27E" strokeWidth="1.5" opacity="0.6" />
        <line x1="145" y1="110" x2="135" y2="110" stroke="#77F27E" strokeWidth="1.5" opacity="0.6" />
        <line x1="145" y1="140" x2="135" y2="140" stroke="#77F27E" strokeWidth="1.5" opacity="0.6" />
      </g>

      {/* Bottom wave pattern - scan effect */}
      <g id="bottom-waves">
        <path
          d="M 100 210 Q 95 215 100 220"
          fill="none"
          stroke="#77F27E"
          strokeWidth="1.5"
          opacity="0.5"
          className="wave-bottom"
        />
        <path
          d="M 90 210 Q 85 215 90 220"
          fill="none"
          stroke="#77F27E"
          strokeWidth="1.5"
          opacity="0.4"
          className="wave-bottom"
        />
        <path
          d="M 110 210 Q 105 215 110 220"
          fill="none"
          stroke="#77F27E"
          strokeWidth="1.5"
          opacity="0.4"
          className="wave-bottom"
        />
      </g>

      <style jsx>{`
        @keyframes logoZoomIn {
          0% {
            transform: scale(0.3) translateY(20px);
            opacity: 0;
            filter: drop-shadow(0 0 0px rgba(119, 242, 126, 0));
          }
          50% {
            transform: scale(1.1) translateY(0);
            opacity: 0.8;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
            filter: drop-shadow(0 0 20px rgba(119, 242, 126, 0.6));
          }
        }

        @keyframes iconPulseGlow {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(119, 242, 126, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(119, 242, 126, 0.8));
          }
        }

        @keyframes usbIconPop {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          70% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes checkmarkDraw {
          0% {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dasharray: 50;
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes lockShake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-2px);
          }
          75% {
            transform: translateX(2px);
          }
        }

        @keyframes waveFloat {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        .plugsafe-logo {
          animation: logoZoomIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                    iconPulseGlow 2s ease-in-out 0.8s infinite;
        }

        #usb-icon {
          animation: usbIconPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s backwards;
        }

        #checkmark-icon {
          animation: checkmarkDraw 0.6s ease-out 0.5s both;
        }

        #lock-icon {
          animation: lockShake 0.5s ease-in-out 1.1s both;
        }

        .wave-bottom {
          animation: waveFloat 1s ease-in-out 0.8s infinite;
        }
      `}</style>
    </svg>
  );
};

export default PlugSafeLogo;
