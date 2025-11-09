import styles from './ProgressBar.module.css';

const ProgressBar = () => (
  <div className={styles.progressBar}>
    <svg viewBox="0 0 400 20" preserveAspectRatio="none" className={styles.svg}>
      <defs>
        <linearGradient id="waveColor" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d6b15a" />
          <stop offset="100%" stopColor="#b58a3a" />
        </linearGradient>
      </defs>

      {/* Wavy left side */}
      <path
        d="M 10 10 
           Q 20 4 30 10 
           T 50 10 
           T 70 10 
           T 90 10 
           T 110 10"
        stroke="url(#waveColor)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Straight right side */}
      <line
        x1="110"
        y1="10"
        x2="380"
        y2="10"
        stroke="#d8d8d8"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Circle knob */}
      <circle cx="110" cy="10" r="6" fill="#d4a64a" />
    </svg>
  </div>
);

export default ProgressBar;
