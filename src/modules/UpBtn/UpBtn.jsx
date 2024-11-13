'use client'
import Image from 'next/image'
import styles from './UpBtn.module.scss'
import arrow from '@/app/assets/icons/upArrow-icon.svg'
import { useEffect, useState } from 'react'

export const UpBtn = () => {
  const [visibleBtn, setVisibleBtn] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // плавный переход
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      // Показать кнопку, ниже 300px экрана
      if (window.scrollY > 1050) {
        setVisibleBtn(true)
      } else {
        setVisibleBtn(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`${styles.upBtn} ${visibleBtn ? styles.show : ''}`}
      onClick={scrollToTop}
    >
      <Image src={arrow} alt='up arrow' width={40} height={22} />
    </div>
  )
}
