// components/Pricing.js

import React from 'react';
import styles from './Pricing.module.css';

export default function Pricing({ data }) {
  if (!data || !Array.isArray(data)) {
    return null;
  }

  return (
    <section className={styles.pricing}>
      <h2>Pricing</h2>
      <div className={styles.pricingGrid}>
        {data.map((plan, index) => (
          <div key={index} className={styles.pricingItem}>
            <h3>{plan.plan}</h3>
            <div className={styles.priceBox}> {/* Add priceBox class */}
              {plan.price}
            </div>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
