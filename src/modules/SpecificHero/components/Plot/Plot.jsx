'use client'
import Image from 'next/image'
import styles from './Plot.module.scss'
import { useState } from 'react'
import downArrow from '@/app/assets/icons/downArrow.svg'
import upArrow from '@/app/assets/icons/upArrow.svg'
import Link from 'next/link'

export const Plot = ({ plotProps }) => {
  const [open, setOpen] = useState(null)

  const openDropdown = (id) => {
    setOpen(id)
  }

  // 3d effect
  const [transform, setTransform] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg)',
  )

  const handleMouseMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect()
    const mouseX = ((e.clientX - container.left) / container.width) * 100 // Позиция идёт в %
    const mouseY = ((e.clientY - container.top) / container.height) * 100 // Позиция идёт в %

    // Рассчет интенсивности параллакса
    const intensity = 20
    const offsetX = ((mouseX - 50) / 50) * intensity
    const offsetY = ((mouseY - 50) / 50) * intensity

    setTransform(
      `perspective(1000px) rotateX(${offsetY}deg) rotateY(${offsetX}deg)`,
    )
  }

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg)')
  }

  return (
    <section className={styles.story}>
      <h1 className={styles.storyTitle}>STORY</h1>
      <span className={styles.storyDescription}>{plotProps.story}</span>
      <div>
        <Link
          href='https://overwatch.blizzard.com/en-gb/media/stories/'
          target='_blank'
        >
          <button className={styles.storyBtn}>VIEW ALL STORIES</button>
        </Link>
      </div>
      {/* По скольку в SpecofocHero компоненте у же имеется запрос на получение данных конкретного\
      героя, мы можем просто в этом компоненте (Plot) передать через пропсы отображение данных
      отдельно для диструктуризации и отобразить их строкой {plotProps.stories.map(...)} 
      т.к. stories в нашей базе данных это массив, находящийся в каждом герое. */}
      {plotProps.stories.map((item) => (
        <div
          className={styles.dropdownSection}
          key={item.id}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div tabIndex={0} className={styles.dropdownBlock}>
            <div
              onClick={() => openDropdown(item.id)}
              className={styles.dropdownTitleBlock}
            >
              <p className={styles.dropdownTitle}>{item.story_title}</p>
              <div>
                {open === item.id ? (
                  <Image src={downArrow} alt='arrow' width={40} height={40} />
                ) : (
                  <Image src={upArrow} alt='arrow' width={40} height={40} />
                )}
              </div>
            </div>
            {open === item.id && (
              <>
                <span className={styles.dropdownDescription}>
                  {item.story_description}
                </span>
              </>
            )}
          </div>
          {open === item.id && (
            <div className={styles.storyImg} style={{ transform }}>
              <Image
                src={item.img}
                alt='story img'
                width={600}
                height={350}
                loading='eager'
              />
            </div>
          )}
        </div>
      ))}
      <div className={styles.line}>
        <div className={styles.topLine}></div>
        <div className={styles.underLine}></div>
      </div>
    </section>
  )
}
