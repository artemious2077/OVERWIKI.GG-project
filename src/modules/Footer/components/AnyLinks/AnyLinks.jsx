'use client'
import Link from 'next/link'
import styles from './AnyLinks.module.scss'

export const AnyLinks = () => {
  return (
    <section className={styles.anyLinks}>
      <h3>More links</h3>
      <Link
        href={'https://t.me/Helluva_Boss_2077'}
        target='_blank'
        className={styles.linkContainer}
      >
        <p className={styles.link}>Contact me</p>
      </Link>
    </section>
  )
}
