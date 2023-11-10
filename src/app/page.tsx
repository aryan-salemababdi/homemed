import styles from './page.module.css';
import LandingPage from '@/components/template/LandingPage/LandingPage';


export default function Home() {
  return (
    <main className={styles.main}>
        <LandingPage />
    </main>
  )
}
