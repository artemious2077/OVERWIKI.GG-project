'use client'
import { useEffect } from 'react'
import styles from './GamingGuideCategories.module.scss'
import { useGuideApi } from './GuideCategoriesApi/GuideCategoriesApi'
import Image from 'next/image'
import { GuideFrame } from './components/GuideFrame/GuideFrame'
import { ProPlayers } from './components/ProPlayers/ProPlayers'

export const GamingGuideCategories = () => {
  const { guideData, guideRequest } = useGuideApi()

  useEffect(() => {
    guideRequest()
  }, [guideRequest])

  return (
    <>
      {guideData.map((item) => (
        <section key={item.id} className={styles.guideSection}>
          <div className={styles.guideBannerBlock}>
            <Image
              src={item.banner}
              alt='guide banner'
              width={905}
              height={480}
            />
            <div className={styles.bannerGradient} />
          </div>
          <GuideFrame guideInfo={item} />
          <ProPlayers players={item} />
        </section>
      ))}
    </>
  )
}
