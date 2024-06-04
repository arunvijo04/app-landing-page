import styles from './ContactSection.module.css';

export default function ContactSection() {
  return (
    <section className={styles.contact}>
      <h2>Contact Us</h2>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
