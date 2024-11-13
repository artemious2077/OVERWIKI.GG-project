import { Requester } from '@/utils/Requester/Requester'
import { create } from 'zustand'

const endpoint = '/loaders'

export const useHeroLoader = create((set) => ({
  heroLoader: [],
  heroLoaderRequest: async () => {
    const response = await Requester.get(endpoint)
    set({ heroLoader: response.data })
  },
}))
