import React from 'react';

export default function ChloroLogo() {
  return (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative"
    >
      {/* Background glow */}
      <defs>
        <filter id="chloro-glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Logo text */}
      <text
        x="10"
        y="26"
        fontSize="18"
        fontWeight="700"
        fill="var(--chloro-purple-glow)"
        className="drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
      >
        Chloro
      </text>
      <text
        x="55"
        y="26"
        fontSize="18"
        fontWeight="400"
        fill="var(--chloro-purple-shimmer)"
        className="drop-shadow-[0_0_6px_rgba(168,85,247,0.3)]"
      >
        Code
      </text>

      {/* Purple accent line */}
      <rect
        x="45"
        y="30"
        width="2"
        height="8"
        rx="1"
        fill="var(--chloro-neon)"
        className="animate-pulse chloro-pulse-glow"
      />

      {/* Subtle circuit pattern */}
      <path
        d="M10 32L12 28M12 28L14 32M25 30L27 26M27 26L29 30M40 32L42 28M42 28L44 32M55 30L57 26M57 26L59 30M70 32L72 28M72 28L74 32M85 30L87 26M87 26M89 30"
        stroke="var(--chloro-electric)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
        className="animate-pulse"
        style={{
          animationDelay: '2s',
          animationDuration: '3s'
        }}
      />

      {/* Corner accents */}
      <circle
        cx="15"
        cy="15"
        r="1.5"
        fill="var(--chloro-neon)"
        className="animate-pulse"
      />
      <circle
        cx="105"
        cy="15"
        r="1.5"
        fill="var(--chloro-neon)"
        className="animate-pulse"
        style={{
          animationDelay: '1s'
        }}
      />
      <circle
        cx="15"
        cy="25"
        r="1"
        fill="var(--chloro-electric)"
        className="animate-pulse"
        style={{
          animationDelay: '0.5s'
        }}
      />
      <circle
        cx="105"
        cy="25"
        r="1"
        fill="var(--chloro-electric)"
        className="animate-pulse"
        style={{
          animationDelay: '1.5s'
        }}
      />
    </svg>
  );
}