'use client'
import Link from 'next/link'
import styles from './NotFound.module.scss'
import { errorImage, useLayout } from '../store/store'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export const ErrorPage = () => {
  const { errorData, errorRequest } = errorImage()

  useEffect(() => {
    errorRequest()
  }, [errorRequest])

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth) * 100
    const y = (clientY / innerHeight) * 100
    setPosition({ x, y })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const setErrorPage = useLayout((state) => state.setErrorPage)

  useEffect(() => {
    setErrorPage(true)
    return () => {
      setErrorPage(false) // Сброс при размонтировании
    }
  }, [setErrorPage])

  useEffect(() => {
    window.scrollTo(0, 500)
  }, [])

  return (
    <section className={styles.background}>
      <div className={styles.errorBlock}>
        <div className={styles.firstContent}>
          <h1>404</h1>
          <p>Page not found (HTTP 404)</p>
        </div>
        <Link href='/'>
          <div className={styles.secondContent}>
            <p className={styles.cross}>❌</p>
            <p>CONTINUE</p>
          </div>
        </Link>
      </div>
      <div className={styles.errorCharacter}>
        {errorData.map((item) => (
          <div key={item.id} className={styles.parallaxContainer}>
            <Image
              className={styles.parallaxImg}
              style={{
                transform: `translate(${position.x - 50}px, ${
                  position.y - -80
                }px)`,
              }}
              src={item.img_url}
              alt='character'
              width={item.width}
              height={item.height}
              loading='eager'
            />
          </div>
        ))}
      </div>
    </section>
  )
}
export default ErrorPage
