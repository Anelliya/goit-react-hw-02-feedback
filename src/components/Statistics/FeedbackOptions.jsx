import styles from './Statistic.module.css'

const FeedbackOptions = ({ heandleGoodFeedback, heandleBadFeedback, heandleNeutralFeedback }) => {
    return (
        <div className="feedback">
            <button type="button" onClick={heandleGoodFeedback} className={styles.feedback_btn} > Good</button>
            <button type="button" onClick={heandleNeutralFeedback} className={styles.feedback_btn}>Neutral</button>
            <button type="button" onClick={heandleBadFeedback} className={styles.feedback_btn}>Bad </button>
        </div>
    )
}

export default FeedbackOptions;