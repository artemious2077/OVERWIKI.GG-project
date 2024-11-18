import { Typography } from '@/UI/Typography/Typography'
import styles from './ProPlayers.module.scss'
import Image from 'next/image'

export const ProPlayers = ({ players }) => {
  return (
    <section className={styles.playersFrame}>
      {players.pro_players.map((item) => (
        <div key={item.id}>
          <Image
            src={item.photo}
            alt='player photo'
            width={174}
            height={244}
            className={styles.photo}
          />
          <div className={styles.biographyBlock}>
            <Image
              src={item.country}
              alt='country flag'
              width={36}
              height={24}
            />
            <Typography variant='p' className={styles.name}>
              {item.name}
            </Typography>
          </div>
          <div className={styles.underGradient} />
        </div>
      ))}
    </section>
  )
}
