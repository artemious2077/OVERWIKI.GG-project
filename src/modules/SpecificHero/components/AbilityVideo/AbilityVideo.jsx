'use client'
import React from 'react'
import { useState } from 'react'
import styles from './AbilityVideo.module.scss'
import ReactPlayer from 'react-player/youtube'
import Image from 'next/image'
// import play from '@/app/assets/icons/Play.svg'
// import pause from '@/app/assets/icons/Pause.svg'

export const AbilityVideo = ({ video }) => {
  const [playing, setPlay] = useState(true)

  const activatePlayBtn = () => {
    // переключение с ф-цией обратного вызова чем с setPlay(!playing)
    setPlay((play) => !play)
  }

  return (
    <section className={styles.videoSection}>
      <div className={styles.videoBlock}>
        <ReactPlayer
          // url={video.ability_video}
          url={`https://www.youtube.com/watch?v=HW88nYOyktE`}
          width='100%'
          height={684}
          loop
          muted
          playing={playing}
          controls={false}
        />
        <div className={styles.line}>
          <div className={styles.topLine}></div>
          <div className={styles.underLine}></div>
        </div>
      </div>
      <button
        onClick={activatePlayBtn}
        className={styles.playBtn}
        data-testid='play-pause-button'
      >
        {playing ? (
          <Image
            src={
              'https://cdn-icons-png.freepik.com/256/8835/8835375.png?semt=ais_hybrid'
            }
            alt='pause'
            width={26}
            height={26}
          />
        ) : (
          <Image
            src={
              'https://cdn-icons-png.freepik.com/256/8835/8835375.png?semt=ais_hybrid'
            }
            alt='play'
            width={26}
            height={26}
          />
        )}
      </button>
    </section>
  )
}
