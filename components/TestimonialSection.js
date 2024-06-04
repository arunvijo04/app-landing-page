// components/TestimonialSection.js

import styles from './TestimonialSection.module.css';

const TestimonialSection = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialContent}>
        <h2 className={styles.testimonialTitle}>Testimonial</h2>
        <h3 className={styles.testimonialSubtitle}>What Our Users Say About Us?</h3>
        <div className={styles.testimonialQuote}>
          <h4>The Best Financial Accounting App Ever!</h4>
          <p>
            “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam
            Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velt. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, 
            Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.”
          </p>
          <div className={styles.testimonialAuthor}>
            <p>Nick Jonas</p>
          </div>
        </div>
      </div>
      <div className={styles.testimonialImage}>
        <div className={styles.userImages}>
          <img src="/user1.png" alt="User 1" className={styles.userImage} />
          <img src="/user2.png" alt="User 2" className={styles.userImage} />
          <img src="/user3.png" alt="User 3" className={styles.userImage} />
          <img src="/user4.png" alt="User 4" className={styles.userImage} />
          <img src="/user5.png" alt="User 5" className={styles.userImage} />
        </div>
        <img src="/main-user.png" alt="Main User" className={styles.mainUserImage} />
        <div className={styles.quoteIcon}>
          <span>&#8220;</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
