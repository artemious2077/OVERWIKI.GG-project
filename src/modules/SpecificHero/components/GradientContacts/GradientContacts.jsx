'use client'
import Image from 'next/image'
import styles from './GradientContacts.module.scss'
import icon_1 from '@/app/assets/icons/tg.svg'
import icon_2 from '@/app/assets/icons/hub.svg'
import icon_3 from '@/app/assets/icons/lab.svg'
import Link from 'next/link'

export const GradientContacts = () => {
  const images = [
    {
      id: 1,
      src: icon_1,
      desc: 'telegram',
      link: 'https://t.me/Helluva_Boss_2077',
    },
    { id: 2, src: icon_2, desc: 'github', link: 'https://github.com/d1avolo' },
    { id: 3, src: icon_3, desc: 'gitlab', link: 'NONE_' },
  ]

  return (
    <section className={styles.gradientLines}>
      <div className={styles.contactsSection}>
        <h1 className={styles.contactsTitle}>Stay in touch!</h1>
        <div className={styles.contactsFrame}>
          {images.map((item) => (
            <div key={item.id} className={styles.icon}>
              <Link href={item.link} target='_blank'>
                <Image src={item.src} alt={item.desc} width={35} height={35} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
