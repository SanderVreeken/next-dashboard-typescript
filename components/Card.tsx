import styles from '../styles/Card.module.css'

type Props = {
    backgroundColor?: string
    borderColor?: string
    children: JSX.Element
    height: string
    minWidth?: string
    padding?: string
}

export default function Card({ backgroundColor = 'inherit', borderColor = backgroundColor, children, height, minWidth = 'fit-content', padding = '0.6rem 0.6rem 0'}: Props) {
    return (
        <div className={styles.card} style={{
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            height: height,
            minWidth: minWidth,
            padding: padding,
        }}>
            {children}
        </div>
    )
}