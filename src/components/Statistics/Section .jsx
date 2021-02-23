import styles from './Statistic.module.css'

const Section = ({ title, children }) => {
    return (
        <div className="section">
            <p className={styles.title}>{title}</p>
            {children}
        </div>
    )
}

export default Section;

