'use client'
import { Typography } from '@/UI/Typography/Typography'
import styles from './TierListModule.module.scss'
import { useTierHeroes } from './TierListApi/TierListApi'
import Image from 'next/image'
import { useEffect } from 'react'

export const TierListModule = () => {
  const { tierList, tierRequest } = useTierHeroes()

  useEffect(() => {
    tierRequest()
  }, [tierRequest])

  const dragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', `hero-${id}`)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const data = e.dataTransfer.getData('text/plain')
    const draggedElement = document.querySelector(`.${data}`)
    if (draggedElement) {
      e.target.appendChild(draggedElement)
    }
  }

  return (
    <section>
      <div className={styles.firstSection}>
        <div className={styles.sectionType}>
          <Typography variant='h1'>S</Typography>
        </div>
        <div
          className={styles.sectionBlock}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      </div>
      {tierList.map((item) => (
        <Image
          key={item.id}
          id={`hero-${item.id}`}
          className={`${styles.hero} hero-${item.id}`}
          draggable
          onDragStart={(e) => dragStart(e, item.id)}
          src={item.avatar}
          alt='hero'
          width={70}
          height={70}
        />
      ))}
    </section>
  )
}

// export const TierListModule = () => {
//   return (
//     <section>
//       <div className={styles.firstSection}>
//         <div className={styles.sectionType}>
//           <Typography variant='h1'>S</Typography>
//         </div>
//         <div className={styles.sectionBlock} />
//       </div>
//       <div className={styles.hero} />
//     </section>
//   )
// }
