import { AiOutlineExport, AiOutlineHome, AiOutlineMessage, AiOutlineRocket, AiOutlineSetting, AiOutlineSnippets, AiOutlineUser } from 'react-icons/ai'

import Button from '../components/Button'
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
    const navBarIcons = [<AiOutlineHome />, <AiOutlineSnippets />, <AiOutlineUser />, <AiOutlineMessage />, <AiOutlineSetting />]

    return (
        <div className={styles.navBar}>
            <section role='top'>
                <Button borderRadius='0' height='84px' padding='0'>
                    <AiOutlineRocket />
                </Button>
            </section>
            <section role='middle'>
                {navBarIcons.map((icon, index) => (
                    <Button backgroundColor={index === 0 ? '#eff3fe' : 'inherit'} borderRadius='0' height='84px' padding='0'>
                        {icon}
                    </Button>
                ))}
            </section>
            <section role='bottom'>
                <Button borderRadius='0' height='84px' padding='0'>
                    <AiOutlineExport />
                </Button>
            </section>
        </div>
    )
}