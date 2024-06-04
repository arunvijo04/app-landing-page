import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>AppLogo</div>
        <ul className={styles.navLinks}>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#cta">Get Started</a></li>
        </ul>
      </nav>
    </header>
  );
}
