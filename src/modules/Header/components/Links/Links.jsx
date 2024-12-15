import Link from 'next/link'
import styles from './Links.module.scss'
import { DatabaseDropdown } from '../DatabaseDropdown/DatabaseDropdown'

export const Links = () => {
  return (
    <section className={styles.linkContainer}>
      <Link href='/' className={styles.link}>
        Characters
      </Link>
      <Link href='/pages/maps' className={styles.link}>
        Maps
      </Link>
      <Link href='/pages/meta' className={styles.link}>
        Meta
      </Link>
      <Link href='/pages/tier-list' className={styles.link}>
        Tier List
      </Link>
      <Link href='/pages/gaming-guide' className={styles.link}>
        Gaming guide
      </Link>
      <DatabaseDropdown />
    </section>
  )
}
