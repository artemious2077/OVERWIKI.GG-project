'use client'
import { useEffect } from 'react'
import { useComps } from './TeamsCompsApi/TeamsCompsApi'
import styles from './TeamsCompsModule.module.scss'
import { Typography } from '@/UI/Typography/Typography'
import { HeroesComp } from './HeroesComp/HeroesComp'

export const TeamsCompsModule = () => {
  const { teamsComps, compsRequest } = useComps()

  useEffect(() => {
    compsRequest()
  }, [compsRequest])

  return (
    <section className={styles.compsSection}>
      {teamsComps.map((item) => (
        <div key={item.id}>
          <div className={styles.titleWrapper}>
            <Typography variant='h1' className={styles.compsTitle}>
              {item.comp_title}
            </Typography>
          </div>
          <HeroesComp heroesComp={item} />
        </div>
      ))}
    </section>
  )
}
