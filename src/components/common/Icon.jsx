// Lightweight inline icon set — no external icon library required.
const PATHS = {
  code: 'M9 18l-6-6 6-6M15 6l6 6-6 6',
  briefcase: 'M4 8h16v11a1 1 0 01-1 1H5a1 1 0 01-1-1V8zM9 8V6a2 2 0 012-2h2a2 2 0 012 2v2',
  target: 'M12 12m-9 0a9 9 0 1018 0a9 9 0 10-18 0M12 12m-4 0a4 4 0 108 0a4 4 0 10-8 0M12 12m-1 0a1 1 0 102 0a1 1 0 10-2 0',
  layers: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 8l9 5 9-5',
  cart: 'M3 4h2l2.4 12.2a2 2 0 002 1.8h7.2a2 2 0 002-1.8L21 8H6M9 21a1 1 0 102 0a1 1 0 10-2 0M17 21a1 1 0 102 0a1 1 0 10-2 0',
  cpu: 'M8 4v3M16 4v3M8 17v3M16 17v3M4 8h3M4 16h3M17 8h3M17 16h3M7 7h10v10H7V7z',
  chat: 'M21 11.5a8.5 8.5 0 01-8.5 8.5 8.4 8.4 0 01-3.9-.9L3 20l1.05-3.6A8.4 8.4 0 013 12.5 8.5 8.5 0 0111.5 4h1A8.5 8.5 0 0121 11.5z',
  automation: 'M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8M12 8a4 4 0 100 8 4 4 0 000-8z',
  api: 'M7 8H4a1 1 0 00-1 1v6a1 1 0 001 1h3M17 8h3a1 1 0 011 1v6a1 1 0 01-1 1h-3M9 3l1 18M15 3l-1 18',
  server: 'M4 4h16v6H4V4zM4 14h16v6H4v-6zM8 7h.01M8 17h.01',
  react: 'M12 12m-2.5 0a2.5 2.5 0 105 0a2.5 2.5 0 10-5 0',
  search: 'M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z',
  speed: 'M12 12l4-4M4 13a8 8 0 1116 0',
  bolt: 'M13 2L4 14h6l-1 8 9-12h-6l1-8z',
  sparkle: 'M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z',
  devices: 'M4 5h12v9H4V5zM8 20h4M16 10h4v6h-4z',
  lock: 'M6 11V7a6 6 0 1112 0v4M5 11h14v10H5V11z',
  scale: 'M12 3v18M5 7l-3 6a3 3 0 006 0l-3-6zM19 7l-3 6a3 3 0 006 0l-3-6zM7 7h10',
  ai: 'M9 3h6l1 4 4 1v6l-4 1-1 4H9l-1-4-4-1V8l4-1 1-4z',
  clean: 'M4 20l6-6M14 4l6 6-9 9H8v-3l9-9z',
  support: 'M12 3a9 9 0 00-9 9v4a2 2 0 002 2h1v-7H4a8 8 0 0116 0h-2v7h1a2 2 0 002-2v-4a9 9 0 00-9-9z'
}

function Icon({ name, size = 24, strokeWidth = 1.7, className = '' }) {
  const d = PATHS[name] || PATHS.sparkle
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}

export default Icon
