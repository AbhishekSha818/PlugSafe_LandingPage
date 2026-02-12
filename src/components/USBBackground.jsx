import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import USBPendrive from './USBPendrive';

const USBBackground = () => {
  const { isDark } = useTheme();
  const [usbDevices] = useState(() => {
    // Generate USB devices in initialization function to avoid setState in effect
    const devices = [];
    const cols = 3;
    const rows = 5;
    
    for (let i = 0; i < 13; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      
      // Calculate grid position (in percentages)
      const baseX = (col / cols) * 100 + 5; // 5% to 95%
      const baseY = (row / rows) * 100 + 5; // 5% to 95%
      
      // Add slight randomization to avoid perfect grid look
      const randomX = (Math.random() - 0.5) * 8; // ±4% deviation
      const randomY = (Math.random() - 0.5) * 6; // ±3% deviation
      
      const x = baseX + randomX;
      const y = baseY + randomY;
      
      // Responsive size (smaller on mobile, larger on desktop)
      // Will be adjusted by parent container media queries
      const baseSize = 45; // Will be 30-40px mobile, 40-50px tablet, 50-70px desktop
      const sizeVariation = Math.random() * 15; // ±7.5px variation
      
      // Random rotation (±15 degrees)
      const rotation = (Math.random() - 0.5) * 30;
      
      devices.push({
        id: i,
        x,
        y,
        size: baseSize + sizeVariation,
        rotation,
      });
    }
    
    return devices;
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background USB devices container */}
      <div className="relative w-full h-full">
        {usbDevices.map((device) => (
          <div
            key={device.id}
            className="absolute usb-float hover:pointer-events-auto group"
            style={{
              left: `${device.x}%`,
              top: `${device.y}%`,
              width: `${device.size * 2.4}px`, // Account for 2.4x height ratio
              transform: `translate(-50%, -50%) rotate(${device.rotation}deg)`,
            }}
          >
            <USBPendrive
              size={device.size}
              opacity={0.2}
              isDark={isDark}
              rotation={0} // Rotation handled by parent div
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default USBBackground;

