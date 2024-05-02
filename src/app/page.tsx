import { CardPost } from '../components/CardPost/index'
import styles from './page.module.css'

const getAllPosts = async () => {
  const response = await fetch('http://localhost:3045/posts')
  if (!response.ok) {
    return []
  }

  return response.json()
}

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <main className={styles.grid}>
      {posts.map((post) => <CardPost post = {post}/>)}
    </main>
  );
}
