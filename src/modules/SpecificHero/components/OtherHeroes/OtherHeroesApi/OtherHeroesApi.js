import { create } from 'zustand'
import { Requester } from '@/utils/Requester/Requester'

const endpoint = '/heroes'

export const useOtherHeroes = create((set) => ({
  otherHeroes: [],
  otherHeroesRequest: async () => {
    const response = await Requester.get(endpoint)
    set({ otherHeroes: response.data.slice(0, 6) })
  },
}))
