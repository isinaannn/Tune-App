
import styles from './ProgressBar.module.css';

const ProgressBar = () => (
  <div className={styles.progressBar}>
  
    <div class={styles.waveProgress} > 
    <svg viewBox="0 0 400 12" preserveAspectRatio="none">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fbbf24" />
          <stop offset="50%" stop-color="#f59e0b" />
          <stop offset="100%" stop-color="#ea580c" />
        </linearGradient>
      </defs>
      <path
        d="M 0,6 Q 10,2 20,6 T 40,6 T 60,6 T 80,6 T 100,6 T 120,6 T 140,6 T 160,6 T 180,6 T 200,6 T 220,6 T 240,6 T 260,6 T 280,6 T 300,6 T 320,6 T 340,6 T 360,6 T 380,6 T 400,6"
        stroke="url(#waveGradient)"
        stroke-width="3"
        fill="none"
        stroke-linecap="round"
      />
    </svg>
  </div>
 

  </div>
);

export default ProgressBar;
