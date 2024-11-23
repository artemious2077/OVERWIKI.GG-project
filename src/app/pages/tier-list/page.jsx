'use client'
import { TierListModule } from '@/modules/TierListModule/TierListModule'
import styles from './tier-list.module.scss'
import { TopBanner } from '@/UI/components/TopBanner/TopBanner'
import { UnderBanner } from '@/UI/components/UnderBanner/UnderBanner'

export const TierList = () => {
  return (
    <section>
      <main className={styles.tierListPage}>
        <TopBanner />
        <TierListModule />
        <UnderBanner />
      </main>
    </section>
  )
}
export default TierList
