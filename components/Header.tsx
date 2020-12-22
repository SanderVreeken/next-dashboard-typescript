import { AiOutlineSearch, AiFillPlayCircle } from 'react-icons/ai'

import styles from '../styles/Header.module.css'
import HeaderDropdown from './HeaderDropdown'

export default function Header() {
    const dropdowns = [{
        image: <AiFillPlayCircle />,
        subTitle: 'Task: #78',
        title: 'Otundo CRM',
        user: false
    }, {
        image: (
            <img src='/images/SanderVreeken.jpg'></img>
        ),
        subTitle: 'Sander V.',
        title: 'User',
        user: true
    }]

    return (
        <header className={styles.header}>
            <section role='leading'>
                <span>
                    <AiOutlineSearch />
                    <input placeholder='Search in CRM ...'></input>
                </span>
            </section>
            <section role='trailing'>
                {dropdowns.map(dropdown => <HeaderDropdown image={dropdown.image} subTitle={dropdown.subTitle} title={dropdown.title} user={dropdown.user} />)}
            </section>
        </header>
    )
}