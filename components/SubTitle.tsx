import { AiOutlineRight } from 'react-icons/ai'

import Button from '../components/Button'
import styles from '../styles/SubTitle.module.css'

type Props = {
    text: string
}

export default function SubTitle({ text }: Props) {
    return (
        <span className={styles.subTitle}>
            <h3 className={styles.subTitle__text}>{text}</h3>
            <Button backgroundColor='#e3eafb' borderRadius='9999px' padding='0.4rem' width='fit-content'>
              <AiOutlineRight />
            </Button>
        </span>
    )
}