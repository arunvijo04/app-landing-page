import styles from './Hero.module.css';

export default function Hero({ data }) {
  // Check if data is undefined or null, or if it does not contain the expected properties
  if (!data || typeof data !== 'object' || !data.headline || !data.subheadline || !data.ctaButtons || !Array.isArray(data.ctaButtons) || !data.image) {
    // If data is not valid, return null or some error message
    return null; // or throw an error, log a message, etc.
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>{data.headline}</h1>
        <p>{data.subheadline}</p>
        <div className={styles.ctaButtons}>
          {data.ctaButtons.map((button, index) => (
            <a key={index} href={button.link} className={styles.button}>{button.text}</a>
          ))}
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={data.image} alt="App Screenshot" />
      </div>
    </section>
  );
}
