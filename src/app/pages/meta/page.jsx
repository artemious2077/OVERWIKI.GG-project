'use client'
import { TeamsCompsModule } from '@/modules/TeamsCompsModule/TeamsCompsModule'
import styles from './teams-comps.module.scss'
import { TopBanner } from '@/UI/components/TopBanner/TopBanner'

export const Meta = () => {
  return (
    <main className={styles.teamsCompsPage}>
      <TopBanner />
      <TeamsCompsModule />
    </main>
  )
}
export default Meta
