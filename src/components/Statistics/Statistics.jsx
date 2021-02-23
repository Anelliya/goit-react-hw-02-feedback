import Notification from './Notification'

import styles from './Statistic.module.css'

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
        <div >
            {total === 0 ? <Notification message="No feedback given." /> :
                <ul className="statistic__list">
                    <li className={styles.statistic__item}>Good: {good}</li>
                    <li className={styles.statistic__item}>Neutral: {neutral}</li>
                    <li className={styles.statistic__item}>Bad: {bad}</li>
                    <li className={styles.statistic__item}>Total: {total}</li>
                    <li className={styles.statistic__item}>Positive feedback: {positiveFeedback}%</li>
                </ul>}
        </div >
    )
}

export default Statistics;