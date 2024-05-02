import Image from '../../../node_modules/next/image'
import styles from './aside.module.css'

import logo from './logo.png'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <Image src={logo} alt="Image for study"/>
        </aside>
    )
}