'use client'
import Image from 'next/image'
import styles from './CompanyLinks.module.scss'
import blizzLogo from '@/app/assets/images/Blizzard-logo.svg'
import gearLogo from '@/app/assets/images/gearbox-logo.svg'
import riotLogo from '@/app/assets/images/riot-logo.svg'
import deLogo from '@/app/assets/images/DE-logo.svg'
import Link from 'next/link'

export const CompanyLinks = () => {
  const images = [
    { id: '1', src: blizzLogo, link: 'https://www.blizzard.com/ru-ru/' },
    { id: '2', src: gearLogo, link: 'https://www.gearboxsoftware.com/' },
    { id: '3', src: riotLogo, link: 'https://www.riotgames.com/ru' },
    { id: '4', src: deLogo, link: 'https://www.digitalextremes.com/' },
  ]

  return (
    <section className={styles.companyLinks}>
      <h3>Company Links</h3>
      <div className={styles.companyFrame}>
        {images.map((item, index) => (
          <div key={item.id} className={styles.images}>
            <Link
              href={item.link}
              target='_blank'
              className={styles.imagesLink}
            >
              <Image
                src={item.src}
                alt='company logo'
                width={index == 3 ? 240 : 124}
                height={index == 3 ? 82 : 70}
                className={styles.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
