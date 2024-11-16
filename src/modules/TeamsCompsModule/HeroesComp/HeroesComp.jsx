import Image from 'next/image'
import styles from './HeroesComp.module.scss'
import { Typography } from '@/UI/Typography/Typography'

export const HeroesComp = ({ heroesComp }) => {
  return (
    <section className={styles.heroSection}>
      {heroesComp.heroes_comp.map((hero) => (
        <div key={hero.id} className={styles.heroFrame}>
          <Image
            src={hero.avatar}
            alt='avatar'
            width={192}
            height={218}
            className={styles.heroAvatar}
          />
          <div className={styles.heroInfoBlock}>
            <Image
              src={hero.class_icon}
              alt='class_icon'
              width={20}
              height={20}
              className={styles.heroClass}
            />
            <Typography variant='p' className={styles.heroName}>
              {hero.name}
            </Typography>
          </div>
        </div>
      ))}
    </section>
  )
}
