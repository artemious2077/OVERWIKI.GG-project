'use client'
import Link from 'next/link'
import styles from './DatabaseDropdown.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import { useRef, useState } from 'react'

export const DatabaseDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openDropdown = () => {
    setIsOpen((open) => !open)
  }

  const dropdownRef = useRef(null)

  const closeDroprown = (mouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(mouseEvent.target)
    ) {
      setIsOpen(false)
    }
    document.addEventListener('mousedown', closeDroprown)
    return () => {
      document.removeEventListener('mousedown', closeDroprown)
    }
  }

  return (
    <section onClick={closeDroprown}>
      <Typography variant='p' className={styles.title} onClick={openDropdown}>
        Database
      </Typography>
      {isOpen && (
        <div ref={dropdownRef} className={styles.databaseSection}>
          <Link
            href='https://us.forums.blizzard.com/en/overwatch/'
            target='_blank'
          >
            <p className={styles.linkBlock}>Overwatch forums</p>
          </Link>
          <Link
            href='https://overwatch.blizzard.com/en-gb/news/patch-notes/live/2024/01/'
            target='_blank'
          >
            <p className={styles.linkBlock}>Largest patch notes</p>
          </Link>
          <Link href='https://esports.overwatch.com/en-us' target='_blank'>
            <p className={styles.linkBlock}>Overwatch League</p>
          </Link>
        </div>
      )}
    </section>
  )
}
