export default function AvatarSVG() {
  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '90%', height: '90%' }}
    >
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a0a3d" />
          <stop offset="100%" stopColor="#030308" />
        </radialGradient>
        <radialGradient id="skinGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fbbf8a" />
          <stop offset="100%" stopColor="#e8955a" />
        </radialGradient>
        <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a0a00" />
          <stop offset="100%" stopColor="#3d1f00" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="circuitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Background */}
      <circle cx="130" cy="130" r="128" fill="url(#bgGrad)" />

      {/* Circuit board decorations */}
      <g stroke="url(#circuitGrad)" strokeWidth="1" opacity="0.6">
        <line x1="20" y1="60" x2="60" y2="60" />
        <line x1="60" y1="60" x2="60" y2="90" />
        <circle cx="60" cy="90" r="3" fill="#7c3aed" opacity="0.5" />
        <line x1="20" y1="100" x2="45" y2="100" />
        <circle cx="45" cy="100" r="3" fill="#06b6d4" opacity="0.5" />
        <line x1="200" y1="50" x2="235" y2="50" />
        <line x1="200" y1="50" x2="200" y2="80" />
        <circle cx="200" cy="80" r="3" fill="#7c3aed" opacity="0.5" />
        <line x1="215" y1="90" x2="240" y2="90" />
        <line x1="30" y1="195" x2="65" y2="195" />
        <line x1="65" y1="195" x2="65" y2="215" />
        <circle cx="65" cy="215" r="3" fill="#ec4899" opacity="0.5" />
        <line x1="200" y1="200" x2="235" y2="200" />
        <circle cx="200" cy="200" r="3" fill="#06b6d4" opacity="0.5" />
      </g>

      {/* Body / Shirt */}
      <ellipse cx="130" cy="215" rx="72" ry="52" fill="url(#shirtGrad)" opacity="0.95" />

      {/* Neck */}
      <rect x="115" y="162" width="30" height="28" rx="8" fill="url(#skinGrad)" />

      {/* Head */}
      <ellipse cx="130" cy="138" rx="56" ry="60" fill="url(#skinGrad)" />

      {/* Hair */}
      <path
        d="M74 125 C74 82 186 82 186 125 C186 100 180 74 130 70 C80 70 74 100 74 125Z"
        fill="url(#hairGrad)"
      />
      {/* Hair sides */}
      <ellipse cx="79" cy="130" rx="8" ry="18" fill="url(#hairGrad)" />
      <ellipse cx="181" cy="130" rx="8" ry="18" fill="url(#hairGrad)" />

      {/* Ears */}
      <ellipse cx="74" cy="140" rx="8" ry="10" fill="url(#skinGrad)" />
      <ellipse cx="186" cy="140" rx="8" ry="10" fill="url(#skinGrad)" />

      {/* Eyes */}
      <ellipse cx="112" cy="140" rx="11" ry="13" fill="white" />
      <ellipse cx="148" cy="140" rx="11" ry="13" fill="white" />
      <circle cx="113" cy="141" r="7" fill="#2d1b69" />
      <circle cx="149" cy="141" r="7" fill="#2d1b69" />
      <circle cx="114" cy="139" r="3.5" fill="#1a0a3d" />
      <circle cx="150" cy="139" r="3.5" fill="#1a0a3d" />
      {/* Eye shine */}
      <circle cx="116" cy="137" r="2" fill="white" opacity="0.9" />
      <circle cx="152" cy="137" r="2" fill="white" opacity="0.9" />

      {/* Eyebrows */}
      <path d="M101 126 Q112 120 123 126" stroke="#3d1f00" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M137 126 Q148 120 159 126" stroke="#3d1f00" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <path d="M126 148 Q130 155 134 148" stroke="#c07a45" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Smile */}
      <path d="M115 163 Q130 174 145 163" stroke="#c07a45" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Shirt collar */}
      <path d="M110 190 L130 210 L150 190" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" fill="none" />

      {/* AI glow dots floating */}
      <circle cx="45" cy="45" r="4" fill="#a78bfa" opacity="0.8" filter="url(#glow)">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="215" cy="40" r="3" fill="#06b6d4" opacity="0.7" filter="url(#glow)">
        <animate attributeName="opacity" values="0.7;0.1;0.7" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="220" cy="210" r="5" fill="#ec4899" opacity="0.6" filter="url(#glow)">
        <animate attributeName="opacity" values="0.6;0.15;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="40" cy="210" r="3.5" fill="#7c3aed" opacity="0.7" filter="url(#glow)">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
