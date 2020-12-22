import styles from '../styles/Button.module.css'

type Props = {
    backgroundColor?: string
    borderRadius?: string
    boxShadow?: string
    children: JSX.Element
    color?: string
    height?: string
    justifyContent?: string
    margin?: string
    padding?: string
    width?: string
}

export default function Button({ backgroundColor = 'inherit', borderRadius ='5px', boxShadow = '0', children, color = '#111', height='fit-content', justifyContent='center', margin = '0', padding = '0.8rem', width = '100%' }: Props) {
    return (
        <button className={styles.button} style={{
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            boxShadow: boxShadow,
            color: color,
            height: height,
            justifyContent: justifyContent,
            margin: margin,
            padding: padding,
            width: width
        }}>
            {children}
        </button>
    )
}