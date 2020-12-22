import { AiOutlinePlus, AiOutlineSelect } from 'react-icons/ai'
import { IoMdPaperPlane } from 'react-icons/io'

import Button from './Button'
import Task from '../components/Task'
import styles from '../styles/TaskBar.module.css'

export default function TaskBar() {
    const tasks = [{
        project: 'Otundo CRM',
        read: false,
        title: 'Make homepage'
    }, {
        project: 'Coca-Juice Website',
        read: false,
        title: 'Problem with fixed header'
    }, {
        project: 'Coca-Juice Website',
        read: true,
        title: 'Fix Safari view with catalogue view'
    }, {
        project: 'Otundo CRM',
        read: true,
        title: 'Create UI Kit for layout'
    }, {
        project: 'Crypto Project',
        read: true,
        title: 'Develop map for site'
    }]

    return (
        <div className={styles.taskBar}>
            <header>
                <h3 className={styles.taskBar__title}>Dashboard</h3>
            </header>
            <div className={styles.taskBar__body}>
                <section role='taskBar-top'>
                    <div className={styles.taskBar__subHeader}>
                        <p className={styles.taskBar__subTitle}>Current Tasks</p>
                        <span>
                            {/* Button that should be converted to a Button component instead. */}
                            <p>Show all</p>
                            <p className={styles.taskBar__number}>143</p>
                        </span>
                    </div>
                    <div className={styles.taskBar__list}>
                        {tasks.map((task, index) => <Task key={index} project={task.project} read={task.read} title={task.title} />)}
                    </div>
                    <Button backgroundColor='#2561ee' color='white' margin='28px 0'>
                        <div style={{
                            width: '100%'
                        }}>
                            <AiOutlinePlus />
                            <h4>Create New Project</h4>
                            <AiOutlineSelect />
                        </div>
                    </Button>
                </section>
                <section role='taskBar-bottom'>
                    <div className={styles.taskBar__helpdesk}>
                        <img className={styles.taskBar__image} src='/images/helpdesk.png'></img>
                        <p>It will help us to avoid misspells and silly errors since code is run through</p>
                        <span>
                            <IoMdPaperPlane />
                            <h5>Helpdesk</h5>
                        </span>
                    </div>  
                </section>  
            </div>
        </div>
    )
}