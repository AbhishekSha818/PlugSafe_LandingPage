import React from 'react';
import USBPendrive from './USBPendrive';

const DevicePort = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '350px',
        height: '280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* USB Pendrive - Flows from right to left into USB port */}
      <div 
        className="pendrive-sliding" 
        style={{ 
          position: 'absolute', 
          left: '380px', 
          top: '60px', 
          zIndex: 0,
        }}
      >
        <USBPendrive size={26} opacity={0.95} isDark={true} rotation={-90} />
      </div>

      {/* Flat Front-Facing Laptop - Simple Design */}
      <svg
        viewBox="0 0 320 280"
        width="350"
        height="280"
        className="device-outline"
        style={{
          filter: 'drop-shadow(0 0 20px rgba(119, 242, 126, 0.3))',
          position: 'absolute',
          zIndex: 1,
        }}
      >
        {/* Laptop Main Body - Flat Front View */}
        <g id="laptop-body">
          {/* Outer case/bezel - rectangle */}
          <rect
            x="30"
            y="40"
            width="260"
            height="180"
            rx="12"
            ry="12"
            fill="rgba(119, 242, 126, 0.06)"
            stroke="#77F27E"
            strokeWidth="2.5"
            opacity="0.9"
          />

          {/* Screen area - dark display */}
          <rect
            x="45"
            y="55"
            width="230"
            height="120"
            rx="8"
            ry="8"
            fill="rgba(20, 20, 20, 0.95)"
            stroke="rgba(119, 242, 126, 0.3)"
            strokeWidth="1.5"
            opacity="0.95"
          />

          {/* Screen shine/reflection effect */}
          <rect
            x="50"
            y="60"
            width="220"
            height="30"
            fill="rgba(255, 255, 255, 0.06)"
            opacity="0.6"
            rx="6"
          />

          {/* PlugSafe branding on screen */}
          <text
            x="160"
            y="125"
            fontSize="16"
            fill="#77F27E"
            opacity="0.7"
            textAnchor="middle"
            fontWeight="bold"
          >
            PlugSafe
          </text>

          {/* Keyboard/Bezel area */}
          <rect
            x="45"
            y="180"
            width="230"
            height="35"
            rx="8"
            fill="rgba(119, 242, 126, 0.04)"
            stroke="rgba(119, 242, 126, 0.2)"
            strokeWidth="1"
            opacity="0.7"
          />

          {/* Keyboard detail lines */}
          <line
            x1="60"
            y1="190"
            x2="260"
            y2="190"
            stroke="#77F27E"
            strokeWidth="0.5"
            opacity="0.3"
          />
          <line
            x1="60"
            y1="200"
            x2="260"
            y2="200"
            stroke="#77F27E"
            strokeWidth="0.5"
            opacity="0.25"
          />

          {/* Trackpad area */}
          <rect
            x="115"
            y="208"
            width="90"
            height="22"
            rx="4"
            fill="rgba(119, 242, 126, 0.08)"
            stroke="rgba(119, 242, 126, 0.4)"
            strokeWidth="1"
            opacity="0.6"
          />

          {/* Status LEDs on keyboard area */}
          <circle cx="65" cy="215" r="2.5" fill="#77F27E" opacity="0.9" className="led-power" />
          <text x="58" y="232" fontSize="5" fill="#77F27E" opacity="0.6">
            PWR
          </text>

          <circle cx="255" cy="215" r="2.5" fill="#77F27E" opacity="0.7" className="led-activity" />
          <text x="248" y="232" fontSize="5" fill="#77F27E" opacity="0.6">
            USB
          </text>
        </g>

        {/* USB Female Port - Right Side, Upper Area */}
        <g id="usb-port" className="port-glow">
          {/* Port outer shell - metallic appearance */}
          <rect
            x="283"
            y="85"
            width="18"
            height="24"
            rx="3"
            ry="3"
            fill="#B0B0B0"
            stroke="#707070"
            strokeWidth="1.5"
            opacity="0.95"
          />

          {/* Port inner cavity - shows receptacle opening */}
          <rect
            x="287"
            y="92"
            width="10"
            height="10"
            rx="2"
            fill="#0a0a0a"
            opacity="0.95"
          />

          {/* Internal pins/contacts (4 USB pins visible) */}
          <rect x="289" y="95" width="1" height="4" fill="#FFD700" opacity="0.9" />
          <rect x="293" y="95" width="1" height="4" fill="#FFD700" opacity="0.9" />
          <rect x="297" y="95" width="1" height="4" fill="#FFD700" opacity="0.9" />
          <rect x="301" y="95" width="1" height="4" fill="#FFD700" opacity="0.9" />

          {/* Port rim highlight - metallic shine */}
          <rect
            x="287"
            y="92"
            width="10"
            height="1.5"
            fill="#FFFFFF"
            opacity="0.35"
          />

          {/* USB label */}
          <text
            x="292"
            y="118"
            fontSize="5"
            fill="#77F27E"
            opacity="0.7"
            textAnchor="middle"
            fontWeight="bold"
          >
            USB
          </text>

          {/* Port connector detail - shows it's a real USB port */}
          <rect
            x="285"
            y="88"
            width="14"
            height="16"
            rx="2"
            fill="none"
            stroke="rgba(119, 242, 126, 0.4)"
            strokeWidth="0.8"
            opacity="0.6"
          />
        </g>

        {/* Power indicator glow */}
        <g id="power-glow">
          <circle cx="65" cy="215" r="7" fill="none" stroke="#77F27E" strokeWidth="0.5" opacity="0.15" />
        </g>
      </svg>

      <style jsx>{`
        @keyframes slideIntoPort {
          0% {
            transform: translateX(0);
            opacity: 0.95;
          }
          85% {
            opacity: 0.95;
          }
          100% {
            transform: translateX(-45px);
            opacity: 0.9;
          }
        }

        @keyframes portGlowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(119, 242, 126, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(119, 242, 126, 0.7));
          }
        }

        @keyframes deviceGlowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 15px rgba(119, 242, 126, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 28px rgba(119, 242, 126, 0.5));
          }
        }

        @keyframes ledBlink {
          0%, 100% {
            opacity: 0.9;
          }
          50% {
            opacity: 0.3;
          }
        }

        .pendrive-sliding {
          animation: slideIntoPort 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
        }

        .device-outline {
          animation: deviceGlowPulse 2s ease-in-out infinite 0.2s;
        }

        #usb-port {
          animation: portGlowPulse 1.5s ease-in-out infinite;
        }

        .led-activity {
          animation: ledBlink 0.8s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          @keyframes slideIntoPort {
            0% {
              transform: translateX(0);
              opacity: 0.95;
            }
            85% {
              opacity: 0.95;
            }
            100% {
              transform: translateX(-36px);
              opacity: 0.9;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default DevicePort;
