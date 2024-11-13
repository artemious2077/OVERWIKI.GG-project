'use client'
import Image from 'next/image'
import styles from './Toolbar.module.scss'
import logo from '@/../public/logo.svg'
import Link from 'next/link'
import { useLayout } from '@/store/store'

export const Toolbar = () => {
  const isErrorPage = useLayout((state) => state.isErrorPage)

  return (
    <>
      {!isErrorPage && (
        <section className={styles.toolbar}>
          <div className={styles.firstSection}>
            <h1 onClick={() => window.location.reload()}>OVERWIKI.GG</h1>
            <Link href='/'>
              <div className={styles.overwatch}>
                <Image src={logo} alt='logo' width={26} height={26} />
                <p>Overwatch</p>
              </div>
            </Link>
          </div>
        </section>
      )}
    </>
  )
}
