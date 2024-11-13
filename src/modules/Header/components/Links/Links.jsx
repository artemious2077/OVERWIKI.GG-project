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
      <Link href='/teams' className={styles.link}>
        Teams
      </Link>
      <Link href='/tier-list' className={styles.link}>
        Tier List
      </Link>
      <Link href='/gaming-guide' className={styles.link}>
        Gaming guide
      </Link>
      <DatabaseDropdown />
    </section>
  )
}
