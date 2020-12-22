import styles from '../styles/CardProject.module.css'

type Props = {
    description: string
    statuses: { completed: number, inProgress: number, toDo: number }
    title: string
}

export default function CardProject({ description, statuses, title }: Props) {
    // Function that calculates and inits the three bars within the component.
    const drawBars = (statuses: { completed: number, inProgress: number, toDo: number }) => {
        const total = statuses.completed + statuses.inProgress + statuses.toDo

        return (
            <span className={styles.cardProject__bar}>
                {Object.values(statuses).map(status => (
                    <div style={{
                        width: `${(status/total)*100}%`
                    }}></div>
                ))}
            </span>
        )
    }

    // Types that are used to describe the number of tasks.
    const statusTypes = ['Completed', 'In Progress', 'To Do']

    return (
        <div className={styles.cardProject}>
            <h5 className={styles.cardProject__title}>{title}</h5>
            <p className={styles.cardProject__description}>{description}</p>
            <div className={styles.cardProject__statuses}>
                {Object.values(statuses).map((status, index) => (
                    <span>
                        <div>
                            <p>{status}</p>
                        </div>
                        <p>{statusTypes[index]}</p>
                    </span>
                ))}
            </div>
            {drawBars(statuses)}
        </div>
    )
}