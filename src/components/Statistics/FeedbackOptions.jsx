
import styles from './Statistic.module.css'

const generateUniqueId = require('generate-unique-id');


const FeedbackOptions = ({ options, heandleFeedback }) => {
    return (
        options.map(opt => (
            <button type="button" key={generateUniqueId()} name={opt} onClick={() => heandleFeedback(opt)} className={styles.feedback_btn}>{opt}</button>
        ))
    )
}

export default FeedbackOptions;