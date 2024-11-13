import { create } from 'zustand'
import { Requester } from '@/utils/Requester/Requester'

const ENDPOINT = '/heroes'

export const useHeroes = create((set) => ({
  Heroes: [],
  heroesRequest: async () => {
    const response = await Requester.get(ENDPOINT)
    set({ Heroes: response.data })
  },
}))
