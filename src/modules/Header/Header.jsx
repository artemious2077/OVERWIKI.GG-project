'use client'
import { useLayout } from '@/store/store'
import { Links } from './components/Links/Links'
import styles from './Header.module.scss'

export const Header = () => {
  const isErrorPage = useLayout((state) => state.isErrorPage)

  return (
    <>
      {!isErrorPage && (
        <nav className={styles.header}>
          <Links />
        </nav>
      )}
    </>
  )
}
