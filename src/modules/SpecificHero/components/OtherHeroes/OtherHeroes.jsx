'use client'
import Link from 'next/link'
import styles from './OtherHeroes.module.scss'
import { useOtherHeroes } from './OtherHeroesApi/OtherHeroesApi'
import { useEffect } from 'react'
import Image from 'next/image'

export const OtherHeroes = ({ otherHeroesProp }) => {
  const { otherHeroes, otherHeroesRequest } = useOtherHeroes()

  useEffect(() => {
    //По скольку otherHeroesProp передаёт ключевые значения, укажим
    //otherHeroesProp.class_description в ф-ции запроса, для отображения
    //отфильтрованных героев +class_description ключ указан у нас в логике запроса
    otherHeroesRequest(otherHeroesProp.class_description)
  }, [otherHeroesRequest, otherHeroesProp.class_description])

  return (
    <section className={styles.otherHeroesSection}>
      <h1 className={styles.sectionTitle}>
        OTHER HEROES: {otherHeroesProp.class_description}
      </h1>
      <div className={styles.otherHeroesFrame}>
        {otherHeroes.map((item) => (
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
      </div>
      <div>
        <Link href='/'>
          <button className={styles.allHeroesBtn}>ALL HEROES</button>
        </Link>
      </div>
      <div className={styles.line}>
        <div className={styles.topLine}></div>
        <div className={styles.underLine}></div>
      </div>
    </section>
  )
}
