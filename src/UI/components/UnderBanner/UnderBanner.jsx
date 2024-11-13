import Image from 'next/image'
import styles from './UnderBanner.module.scss'
import { useUnderBanner } from './UnderBannerApi/UnderBannerApi'
import { useEffect } from 'react'

export const UnderBanner = () => {
  const { underBanner, underBannerRequest } = useUnderBanner()

  useEffect(() => {
    underBannerRequest()
  }, [underBannerRequest])

  return (
    <section className={styles.bannerSection}>
      {underBanner.map((item) => (
        <Image
          key={item.id}
          src={item.img_url}
          alt='banner'
          width={item.width}
          height={item.height}
          className={styles.banner}
        />
      ))}
    </section>
  )
}
