import Image from 'next/image'
import styles from './TopBanner.module.scss'
import bannerLogo from '@/app/assets/images/topBanner.svg'

export const TopBanner = () => {
  return (
    <section className={styles.topBanner}>
      <Image
        src={bannerLogo}
        alt='top banner'
        width={661}
        height={54}
        className={styles.zAxis}
      />
    </section>
  )
}
