
import styles from './Lyrics.module.css';

const Lyrics = () => (
  <div className={styles.Lyrics}>
    <h3>Lyrics</h3>
    <svg width="100" height="32" viewBox="0 0 400 50">
            <defs>
  <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%"   stop-color="white" stop-opacity="0" />  
    <stop offset="30%"  stop-color="white" stop-opacity="1" />  
    <stop offset="70%"  stop-color="white" stop-opacity="1" />
    <stop offset="100%" stop-color="white" stop-opacity="0" />  
  </linearGradient>
</defs>
      <path d="M0 25 H160 C175 25, 185 32, 195 37 L200 42 L205 37 C215 32, 225 25, 240 25 H400"
      stroke="url(#fade)"
      stroke-width="3.5"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      />
    </svg>
      </div>
);



export default Lyrics;
