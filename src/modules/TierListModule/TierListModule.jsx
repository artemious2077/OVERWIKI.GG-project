'use client'
import { Typography } from '@/UI/Typography/Typography'
import styles from './TierListModule.module.scss'
import { useTierHeroes } from './TierListApi/TierListApi'
import Image from 'next/image'
import { useEffect } from 'react'
import logo from '@/app/assets/icons/tierLogo.svg'

export const TierListModule = () => {
  const { tierList, tierRequest } = useTierHeroes()

  useEffect(() => {
    tierRequest()
  }, [tierRequest])

  const dragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', `id-${id}`)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData('text/plain')
    const draggedElement = document.querySelector(`.${data}`)
    if (
      (draggedElement && e.target.classList.contains(styles.sectionBlock)) ||
      e.target.classList.contains(styles.allHeroesContainer)
    ) {
      e.target.appendChild(draggedElement)
    }
  }

  return (
    <section className={styles.tierSection}>
      <section>
        <article className={styles.sectionContainer}>
          <div className={styles.typeS}>
            <Typography variant='h1' className={styles.sectionTitle}>
              S
            </Typography>
          </div>
          <div
            className={styles.sectionBlock}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        </article>
        <article className={styles.sectionContainer}>
          <div className={styles.typeA}>
            <Typography variant='h1' className={styles.sectionTitle}>
              a
            </Typography>
          </div>
          <div
            className={styles.sectionBlock}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        </article>
        <article className={styles.sectionContainer}>
          <div className={styles.typeB}>
            <Typography variant='h1' className={styles.sectionTitle}>
              b
            </Typography>
          </div>
          <div
            className={styles.sectionBlock}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        </article>
        <article className={styles.sectionContainer}>
          <div className={styles.typeC}>
            <Typography variant='h1' className={styles.sectionTitle}>
              c
            </Typography>
          </div>
          <div
            className={styles.sectionBlock}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        </article>
        <article className={styles.sectionContainer}>
          <div className={styles.typeD}>
            <Typography variant='h1' className={styles.sectionTitle}>
              d
            </Typography>
          </div>
          <div
            className={styles.sectionBlock}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        </article>
      </section>
      <aside
        className={styles.allHeroesContainer}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {tierList.map((item) => (
          <Image
            key={item.id}
            id={`id-${item.id}`}
            className={`${styles.hero} id-${item.id}`}
            draggable
            onDragStart={(e) => dragStart(e, item.id)}
            src={item.avatar}
            alt='hero'
            width={70}
            height={70}
          />
        ))}
        <div className={styles.logo}>
          <Image src={logo} alt='logo' width={70} height={70} />
        </div>
      </aside>
    </section>
  )
}
