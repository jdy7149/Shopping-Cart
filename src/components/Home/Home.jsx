import { Link } from 'react-router';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>YOUR NEXT FAVORITE FIND</span>

          <h1 className={styles.title}>
            Good finds.
            <br />
            <span>Great everyday.</span>
          </h1>

          <p className={styles.description}>
            Explore products picked for your everyday life. Find something you
            love and make it yours.
          </p>

          <Link to="/shop" className={styles.shopButton}>
            Browse Shop
            <span aria-hidden="true">→</span>
          </Link>

          <div className={styles.note}>
            <span className={styles.noteDot} />
            Discover something new today
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.imageBackdrop} />

          <img
            className={styles.heroImage}
            src="/public/kapoor1952-shopping-8584891_1920.jpg"
            alt="Hero Image"
          />

          <div className={styles.imageLabel}>
            <span className={styles.labelCaption}>THE COLLECTION</span>
            <span className={styles.labelTitle}>Made for your everyday</span>
          </div>
        </div>
      </section>

      <section className={styles.features} aria-label="Shopping highlights">
        <article className={styles.feature}>
          <span className={styles.featureNumber}>01</span>
          <div>
            <h2>Explore freely</h2>
            <p>Browse a range of products in one place.</p>
          </div>
        </article>

        <article className={styles.feature}>
          <span className={styles.featureNumber}>02</span>
          <div>
            <h2>Find your favorite</h2>
            <p>Discover products that catch your eye.</p>
          </div>
        </article>

        <article className={styles.feature}>
          <span className={styles.featureNumber}>03</span>
          <div>
            <h2>Your cart, your way</h2>
            <p>Choose your items and adjust quantities as you go.</p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Home;
