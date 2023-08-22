import Image from 'next/image'
import styles from './page.module.css'
import Dashboard from "@/containers/dashboard/dashboard";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Dashboard/>
      </div>
    </main>
  )
}
