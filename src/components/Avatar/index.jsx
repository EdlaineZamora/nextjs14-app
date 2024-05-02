import Image from '../../../node_modules/next/image'
import styles from './avatar.module.css'

export const Avatar = ({name, imageSrc}) => {
    return (
        <ul className={styles.ul}>
            <li>
                <Image src={imageSrc} width={32} height={32} alt="Avatar image"/>
            </li>
            <li>
                @{name}
            </li>
        </ul>
        
    )
}