import { Link } from 'react-router';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <section className={styles.page} aria-labelledby="error-title">
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src="/bad-url-cat.jpg"
            alt="A cat staring directly at the camera"
          />
        </div>

        <div className={styles.content}>
          <span className={styles.errorCode}>404 · PAGE NOT FOUND</span>

          <h1 id="error-title" className={styles.title}>
            Well, this is awkward.
          </h1>

          <p className={styles.description}>
            This page doesn't exist or may have moved. Even this cat can't
            figure out where you were trying to go.
          </p>

          <Link to="/" className={styles.homeButton}>
            Go back home
            <span aria-hidden="true">→</span>
          </Link>

          <p className={styles.hint}>Let's get you back on the right track.</p>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
