// components/FeaturesSection.js

import styles from './FeaturesSection.module.css';

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featureImage}>
        <img src="/app-feature.png" alt="App Feature" />
      </div>
      <div className={styles.featureContent}>
        <h2 className={styles.featureTitle}>Features</h2>
        <h3 className={styles.featureSubtitle}>Uifry Premium</h3>
        <div className={styles.featureItem}>
          <h4>🌟 Budgeting Intervals</h4>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
        </div>
        <div className={styles.featureItem}>
          <h4>🌟 Budgeting Intervals</h4>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
        </div>
        <div className={styles.featureItem}>
          <h4>🌟 Budgeting Intervals</h4>
          <p>Cum Et Convallis Risus Placerat Aliquam, Nunc, Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
