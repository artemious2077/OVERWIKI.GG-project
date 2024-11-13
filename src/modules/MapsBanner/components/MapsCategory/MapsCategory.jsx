'use client'
import { Typography } from '@/UI/Typography/Typography'
import styles from './MapsCategory.module.scss'
import { useMapsCategories } from '../../MapsBannerApi/MapsBannerApi'
import { MapsSlider } from './component/MapsSLider'
import React, { useEffect } from 'react'

export const MapsCategory = () => {
  const { maps, mapsRequest } = useMapsCategories()

  useEffect(() => {
    mapsRequest()
  }, [mapsRequest])

  return (
    <section className={styles.mapsSection}>
      {maps.map((item) => (
        <div key={item.id}>
          <Typography variant='h2' className={styles.categoryTitle}>
            {item.maps_category_title}
          </Typography>
          <MapsSlider mapSlides={item} />
        </div>
      ))}
    </section>
  )
}
