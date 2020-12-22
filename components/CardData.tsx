import styles from '../styles/CardData.module.css'

type Props = {
    color?: string
    number: number
    percentage?: number
    status: string
}

export default function CardData({ color = '#111', number, percentage, status }: Props) {
    return (
        <div className={styles.cardData} style={{
            color: color
        }}>
            <span>
                <h1>{number}</h1>
                {/* The percentage is only displayed if provided as a parameter. */}
                {percentage && <div className={styles.cardData__percentage}>
                    <h5>{percentage}%</h5>
                </div>}
            </span>
            <p className={styles.cardData__status}>{status}</p>
        </div>
    )
}