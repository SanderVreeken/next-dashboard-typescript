import { AiOutlineRight } from 'react-icons/ai'

import styles from '../styles/Task.module.css'

type Props = {
    project: string
    read: boolean
    title: string
}

export default function Task({ project, read, title }: Props) {
    return (
        <div className={styles.task}>
            <div className={styles.task__titles}>
                <span>
                    {!read && <div className={styles.task__new}></div>}
                    <h5 className={styles.task__title}>{title}</h5>
                </span>
                <p>{project}</p>
            </div>
            <div className={styles.task__arrow}>
                {/* Should be rewritten as a Button component instead. */}
                <div>
                    <AiOutlineRight />
                </div>
            </div>
        </div>
    )
}