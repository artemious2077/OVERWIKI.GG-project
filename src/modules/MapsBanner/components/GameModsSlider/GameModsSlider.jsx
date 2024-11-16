'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import styles from './GameModsSlider.module.scss'
import { useGameModsSlides } from '../../MapsBannerApi/MapsBannerApi'
import leftArrow from '@/app/assets/icons/sliderArrowLeft.svg'
import rightArrow from '@/app/assets/icons/sliderArrowRight.svg'

export const GameModsSlider = () => {
  const { sliders, slidesRequest } = useGameModsSlides()

  useEffect(() => {
    slidesRequest()
  }, [slidesRequest])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        const selectedIndex = emblaApi.selectedScrollSnap()
        setCurrentIndex(selectedIndex)
      }
      emblaApi.on('select', onSelect)
      return () => emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const prevSlide = () => emblaApi.scrollPrev()
  const nextSlide = () => emblaApi.scrollNext()

  return (
    <section className={styles.faderSlider}>
      <div className={styles.topLineBar}>
        <div className={styles.topLine} />
        <div className={styles.underLine} />
      </div>
      <div className={styles.faderSliderViewport} ref={emblaRef}>
        <div className={styles.faderSliderContainer}>
          {sliders.map((item) => (
            <div key={item.id}>
              <div
                className={styles.slide}
                style={{
                  backgroundImage: `url(${item.slide_url})`,
                }}
              />
              <div className={styles.slideBtnsContainer}>
                <button className={styles.slideArrow} onClick={prevSlide}>
                  <Image src={leftArrow} alt='arrow' width={50} height={50} />
                </button>
                <Image
                  src={item.slide_url}
                  alt='slide'
                  width={700}
                  height={400}
                  quality={100}
                  className={styles.slideImg}
                />
                <button className={styles.slideArrow} onClick={nextSlide}>
                  <Image src={rightArrow} alt='arrow' width={50} height={50} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.underLineBar}>
        <div className={styles.topLine} />
        <div className={styles.underLine} />
      </div>
    </section>
  )
}
