import { BiChevronDown } from 'react-icons/bi'
import styles from '../styles/HeaderDropdown.module.css'

type Props = {
    image: JSX.Element
    subTitle: string
    title: string
    user: boolean
}

export default function HeaderDropdown({ image, subTitle, title, user }: Props) {
    return (
        <div className={styles.headerDropdown}>
            <span className={styles.headerDropdown__image}>
                {image}
            </span>
            <span>
                <h5 className={styles.headerDropdown__title}>{title}</h5>
                <h4 style={{
                    color: user ? '#111' : '#2561ee' 
                }}>{subTitle}</h4>
            </span>
            <BiChevronDown />
        </div>
    )
}