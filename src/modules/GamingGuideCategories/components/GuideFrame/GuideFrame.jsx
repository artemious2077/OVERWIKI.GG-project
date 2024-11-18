import Image from 'next/image'
import styles from './GuideFrame.module.scss'
import { Typography } from '@/UI/Typography/Typography'

export const GuideFrame = ({ guideInfo }) => {
  return (
    <>
      {guideInfo.guides.map((guideItem) => (
        <section key={guideItem.id}>
          <div className={styles.titleBlock}>
            <div className={styles.numericBlock}>
              <div className={styles.leftLine} />
              <div className={styles.number}>{guideItem.id}</div>
              <div className={styles.rightLine} />
            </div>
            <Typography variant='h1' className={styles.guideTitle}>
              {guideItem.guide_title}
            </Typography>
          </div>
          <div className={styles.guideFrame}>
            <div className={styles.topLine} />
            <Typography variant='span' className={styles.guideDescription}>
              {guideItem.guide_description}
            </Typography>
            <div className={styles.guideImgBlock}>
              <div className={styles.tobBorder} />
              <Image
                src={guideItem.guide_img}
                alt='guide image'
                width={488}
                height={268}
              />
              <div className={styles.bottomBorder} />
            </div>
            <div className={styles.bottomLine} />
          </div>
        </section>
      ))}
    </>
  )
}
