'use client'
import { useLayout } from '@/store/store'
import { AnyLinks } from './components/AnyLinks/AnyLinks'
import { CompanyLinks } from './components/CompanyLinks/CompanyLinks'
import { SiteInfo } from './components/SiteInfo/SiteInfo'
import styles from './Footer.module.scss'

export const Footer = () => {
  const isErrorPage = useLayout((state) => state.isErrorPage)

  return (
    <>
      {!isErrorPage && (
        <footer className={styles.footer}>
          <SiteInfo />
          <AnyLinks />
          <CompanyLinks />
        </footer>
      )}
    </>
  )
}
