import styles from './FAQ.module.css';

export default function FAQ({ data }) {
  if (!data || !Array.isArray(data)) {
    return null;
  }

  return (
    <section className={styles.faq}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faqGrid}>
        {data.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
