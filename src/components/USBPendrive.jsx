import React from 'react';

const USBPendrive = ({ 
  size = 50, 
  opacity = 0.2, 
  isDark = false,
  rotation = 0,
  style = {}
}) => {
  // Theme-aware colors - improved visibility
  // Light theme: Medium gray for visibility on white background
  // Dark theme: Light gray for good contrast on dark background
  const usbColor = isDark ? '#9CA3AF' : '#6B7280'; // Darker gray for light theme, lighter for dark theme
  const portColor = isDark ? '#FCD34D' : '#F59E0B'; // Amber gold in both themes
  const portShadow = isDark ? '#D97706' : '#B45309'; // Darker amber shadow
  const capColor = isDark ? '#6B7280' : '#4B5563'; // Cap color
  const highlightColor = isDark ? '#D1D5DB' : '#FFFFFF'; // Highlight
  const borderColor = isDark ? '#4B5563' : '#374151'; // Border for definition

  return (
    <svg
      viewBox="0 0 100 280"
      width={size}
      height={size * 2.8}
      style={{
        opacity,
        transform: `rotate(${rotation}deg)`,
        ...style
      }}
      className="usb-pendrive"
    >
      {/* USB Connector Port - More visible design (top) */}
      <g id="usb-connector">
        {/* Outer connector shell */}
        <rect
          x="32"
          y="0"
          width="36"
          height="28"
          rx="2"
          ry="2"
          fill={portColor}
          stroke={portShadow}
          strokeWidth="1.5"
        />

        {/* Inner cavity - darker shade for depth */}
        <rect
          x="38"
          y="6"
          width="24"
          height="16"
          rx="1"
          fill={portShadow}
          opacity="0.9"
        />

        {/* Connector pins - metallic detail */}
        <rect
          x="40"
          y="8"
          width="5"
          height="12"
          fill={highlightColor}
          opacity="0.7"
        />
        <rect
          x="48"
          y="8"
          width="5"
          height="12"
          fill={highlightColor}
          opacity="0.7"
        />
        <rect
          x="56"
          y="8"
          width="5"
          height="12"
          fill={highlightColor}
          opacity="0.7"
        />

        {/* Top shine on connector */}
        <rect
          x="38"
          y="6"
          width="24"
          height="2"
          fill={highlightColor}
          opacity="0.5"
        />
      </g>

      {/* Main USB Body - Bold, Clearly Recognizable Pendrive Shape */}
      <g id="usb-body">
        {/* Main body - larger rounded rectangle */}
        <rect
          x="15"
          y="26"
          width="70"
          height="190"
          rx="22"
          ry="22"
          fill={usbColor}
          stroke={borderColor}
          strokeWidth="1"
        />

        {/* Large top highlight/shine for dimension */}
        <rect
          x="22"
          y="32"
          width="56"
          height="20"
          rx="10"
          fill={highlightColor}
          opacity="0.3"
        />

        {/* Side highlight for 3D effect */}
        <ellipse
          cx="22"
          cy="110"
          rx="8"
          ry="50"
          fill={highlightColor}
          opacity="0.15"
        />

        {/* Bottom body highlight */}
        <ellipse
          cx="50"
          cy="200"
          rx="20"
          ry="8"
          fill={highlightColor}
          opacity="0.1"
        />
      </g>

      {/* Bottom Cap - More defined and visible */}
      <g id="bottom-cap">
        {/* Cap body */}
        <ellipse
          cx="50"
          cy="225"
          rx="28"
          ry="15"
          fill={capColor}
          stroke={borderColor}
          strokeWidth="1"
        />

        {/* Cap highlight */}
        <ellipse
          cx="50"
          cy="221"
          rx="26"
          ry="6"
          fill={highlightColor}
          opacity="0.2"
        />

        {/* Cap center detail */}
        <circle
          cx="50"
          cy="225"
          r="8"
          fill={borderColor}
          opacity="0.6"
        />
      </g>

      {/* Connector ring detail - connects body to cap */}
      <g id="connector-ring">
        <circle
          cx="50"
          cy="240"
          r="4"
          fill={capColor}
          opacity="0.7"
        />
        <circle
          cx="50"
          cy="250"
          r="4"
          fill={capColor}
          opacity="0.7"
        />
      </g>

      {/* Bottom ring accent */}
      <g id="bottom-accent">
        <ellipse
          cx="50"
          cy="268"
          rx="26"
          ry="8"
          fill="none"
          stroke={borderColor}
          strokeWidth="1"
          opacity="0.5"
        />
      </g>
    </svg>
  );
};

export default USBPendrive;
