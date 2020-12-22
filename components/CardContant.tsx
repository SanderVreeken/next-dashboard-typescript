import moment from 'moment'
import styles from '../styles/CardContact.module.css'

type Props = {
    company: string
    name: string
    updated: number
}

export default function CardContact({ company, name, updated }: Props) {
    return (
        <>
            <h5 className={styles.cardContact__name}>{name}</h5>
            <p className={styles.cardContact__company}>{company}</p>
            <span className={styles.cardContact__updated}>
                <h5>{moment(updated).format('D MMM YYYY')}</h5>
                <h5 className={styles.cardContact__time}>at {moment(updated).format('h:mm A')}</h5>
            </span>
        </>
    )
}