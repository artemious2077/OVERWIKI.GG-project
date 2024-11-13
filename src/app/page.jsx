'use client'
import { TopBanner } from '@/UI/components/TopBanner/TopBanner'
import styles from './app.module.scss'
import { Heroes } from '@/modules/Heroes/Heroes'
import { UnderBanner } from '@/UI/components/UnderBanner/UnderBanner'

export const Home = () => {
  return (
    <main className={styles.homePage}>
      <TopBanner />
      <Heroes />
      <UnderBanner />
    </main>
  )
}
export default Home
