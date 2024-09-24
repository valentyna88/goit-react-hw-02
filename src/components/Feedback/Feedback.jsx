import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p className={styles.text}>Good: {feedback.good}</p>
      <p className={styles.text}>Neutral: {feedback.neutral}</p>
      <p className={styles.text}>Bad: {feedback.bad}</p>
      <p className={styles.text}>Total: {totalFeedback}</p>
      <p className={styles.text}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
