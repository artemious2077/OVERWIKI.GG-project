'use client'
import Link from 'next/link'
import styles from './ParallaxSection.module.scss'
import Image from 'next/image'
import doomfist from '@/app/assets/images/Doomfist-parallax.svg'
import sombra from '@/app/assets/images/Sombra-parallax.svg'
import reaper from '@/app/assets/images/Reaper-parallax.svg'
import { useEffect, useRef, useState } from 'react'

export const ParallaxSection = () => {
  const [position, setPosition] = useState({
    doomfist: { x: 0, y: 0 },
    sombra: { x: 0, y: 0 },
    reaper: { x: 0, y: 0 },
  })

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth) * 100
    const y = (clientY / innerHeight) * 100
    setPosition({
      doomfist: { x: x * 0.5, y: y * 0.5 },
      sombra: { x: x * 0.3, y: y * 0.3 },
      reaper: { x: x * 0.7, y: y * 0.7 },
    })
  }

  const handleMouseLeave = () => {
    setPosition({
      doomfist: { x: 0, y: 0 },
      sombra: { x: 0, y: 0 },
      reaper: { x: 0, y: 0 },
    })
  }

  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    section.addEventListener('mousemove', handleMouseMove)
    section.addEventListener('mouseout', handleMouseLeave)
    return () => {
      section.removeEventListener('mousemove', handleMouseMove)
      section.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  return (
    <section
      className={styles.parallaxSection}
      onMouseOut={handleMouseLeave}
      ref={sectionRef}
    >
      <div className={styles.infoBlock}>
        <h1 className={styles.sectionTitle}>INTERESTED?JUST PLAY THE GAME!</h1>
        <div>
          <Link
            href='https://eu.shop.battle.net/ru-ru/product/overwatch'
            target='_blank'
          >
            <button className={styles.playBtn}>PLAY</button>
          </Link>
        </div>
      </div>
      <>
        <Image
          src={doomfist}
          alt='doomfist'
          width={617}
          height={904}
          className={styles.heroOne}
          style={{
            transform: `translate(${position.doomfist.x - 0}px, ${
              position.doomfist.y - 0
            }px)`,
            transition: 'transform 0.6s ease-out',
          }}
        />
        <Image
          src={sombra}
          alt='sombra'
          width={311}
          height={785}
          className={styles.heroTwo}
          style={{
            transform: `translate(${position.sombra.x - 0}px, ${
              position.sombra.y - 0
            }px)`,
            transition: 'transform 0.6s ease-out',
          }}
        />
        <Image
          src={reaper}
          alt='reaper'
          width={584}
          height={894}
          className={styles.heroThree}
          style={{
            transform: `translate(${position.reaper.x - 0}px, ${
              position.reaper.y - 0
            }px)`,
            transition: 'transform 0.6s ease-out',
          }}
        />
      </>
    </section>
  )
}
