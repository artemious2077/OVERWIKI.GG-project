import Image from 'next/image'
import styles from './Characteristic.module.scss'

export const Characteristic = ({ heroProp }) => {
  return (
    <section className={styles.characteristicBlock}>
      <div className={styles.characteristicSection}>
        <div className={styles.icon}>
          <Image
            src={heroProp.class_icon}
            alt='class icon'
            width={25}
            height={25}
          />
        </div>
        <p className={styles.title}>{heroProp.class_description}</p>
      </div>
      {''}
      <div className={styles.characteristicSection}>
        <div className={styles.icon}>
          <Image
            src={heroProp.location_icon}
            alt='class icon'
            width={25}
            height={25}
          />
        </div>
        <p className={styles.title}>{heroProp.location_description}</p>
      </div>
      {''}
      <div className={styles.characteristicSection}>
        <div className={styles.icon}>
          <Image
            src={heroProp.birth_icon}
            alt='class icon'
            width={25}
            height={25}
          />
        </div>
        <p className={styles.title}>{heroProp.age}</p>
      </div>
    </section>
  )
}
