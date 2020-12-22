import { IconContext } from 'react-icons'

import Button from '../components/Button'
import styles from '../styles/CardHeader.module.css'

type Props = {
    buttonBackgroundColor?: string
    buttonBoxShadow?: string
    buttonWidth?: string
    icon: JSX.Element
    iconColor?: string
    subTitle: string
    title: string
    titleColor?: string
}

export default function CardHeader({ buttonBackgroundColor, buttonBoxShadow, buttonWidth, icon, iconColor = 'black', subTitle, title, titleColor = 'black' }: Props) {
    return (
        <header className={styles.cardHeader}>
            <Button backgroundColor={buttonBackgroundColor} boxShadow={buttonBoxShadow} width={buttonWidth}>
                <IconContext.Provider value={{ color: iconColor }}>
                    {icon}
                </IconContext.Provider>
            </Button>
            <span>
                <h5 style={{
                    color: titleColor
                }}>{title}</h5>
                <h5 className={styles.cardHeader__subTitle}>{subTitle}</h5>
            </span>
        </header>
    )
}