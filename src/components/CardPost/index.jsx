import Image from '../../../node_modules/next/image'
import {Avatar} from '../Avatar/index'
import styles from './card-post.module.css'

export const CardPost = ({ post }) => {
    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <figure className={styles.figure}>
                    <Image 
                        src={post.cover} 
                        width={438} 
                        height={133} 
                        alt="Card post image"
                    />
                </figure>
            </header>
            <section className={styles.body}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer className={styles.footer}>
                <Avatar name={post.author.username} imageSrc={post.author.avatar}/>
            </footer>
        </article>
    )
}