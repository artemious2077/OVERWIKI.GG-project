'use client'
import Image from 'next/image'
import styles from './CategorySlide.module.scss'
import leftArrow from '@/app/assets/icons/sortLeft.svg'
import rightArrow from '@/app/assets/icons/sortRight.svg'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useRef } from 'react'

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

export const CategorySlide = ({ categorySlides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    draggable: true,
  })
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number')
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const scale = numberWithinRange(tweenValue, 0, 1).toString()
        const tweenNode = tweenNodes.current[slideIndex]
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])

  const prevSlide = () => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }

  const nextSlide = () => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }

  return (
    <section className={styles.sideSection}>
      <div className={styles.leftSlideBtn} onClick={prevSlide}>
        <Image src={leftArrow} alt='arrow' width={30} height={30} />
      </div>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {categorySlides.maps.map((mapData, index) => (
              <div
                key={mapData.id}
                // className={`${
                //   index === categorySlides.maps?.length - 1
                //     ? styles.embla__slide__last
                //     : ''
                // }`}
              >
                <Image
                  className={styles.slideImg}
                  src={mapData.img_url}
                  alt='map'
                  width={490}
                  height={265}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.rightSlideBtn} onClick={nextSlide}>
        <Image src={rightArrow} alt='arrow' width={30} height={30} />
      </div>
    </section>
  )
}
