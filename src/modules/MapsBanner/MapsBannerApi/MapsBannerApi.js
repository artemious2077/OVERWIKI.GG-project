import { Requester } from '@/utils/Requester/Requester'
import { create } from 'zustand'

const endpoint_1 = '/maps_banner'

export const useMapBanner = create((set) => ({
  bannerData: [],
  bannerRequest: async () => {
    const response = await Requester.get(endpoint_1)
    set({ bannerData: response.data })
  },
}))

export const useGameModsSlides = create((set) => ({
  sliders: [],
  slidesRequest: async () => {
    const response = await Requester.get(endpoint_1)
    const slidesData = response.data.find((item) => item.game_mode_slides)
    set({ sliders: slidesData.game_mode_slides })
  },
}))

const endpoint_2 = '/maps_categories'

export const useMapsCategories = create((set) => ({
  maps: [],
  mapsRequest: async () => {
    const response = await Requester.get(endpoint_2)
    set({ maps: response.data })
  },
}))
