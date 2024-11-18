'use client'
import { TopBanner } from '@/UI/components/TopBanner/TopBanner'
import styles from './gaming-guide.module.scss'
import { UnderBanner } from '@/UI/components/UnderBanner/UnderBanner'
import { GamingGuideCategories } from '@/modules/GamingGuideCategories/GamingGuideCategories'

export const GamingGuide = () => {
  return (
    <main className={styles.gamingGuidePage}>
      <TopBanner />
      <GamingGuideCategories />
      <UnderBanner />
    </main>
  )
}
export default GamingGuide
