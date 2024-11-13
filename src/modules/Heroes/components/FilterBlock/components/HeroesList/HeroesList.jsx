import Link from 'next/link'
import styles from './HeroesList.module.scss'
import Image from 'next/image'

export const HeroesList = ({ heroes }) => {
  // проверка на явление массивом
  // if (!Array.isArray(heroes)) {
  //   return null
  // }

  return (
    <>
      {heroes.map((item) => (
        <div key={item.id} className={styles.heroFrame}>
          <Link href={`/pages/hero?id=${item.id}`}>
            <Image
              src={item.avatar}
              alt='avatar'
              width={194}
              height={200}
              className={styles.avatar}
            />
            <div className={styles.name}>
              <div className={styles.classIcon}>
                <Image
                  src={item.class_icon}
                  alt='class icon'
                  width={20}
                  height={20}
                />
              </div>
              <p>{item.name}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}
