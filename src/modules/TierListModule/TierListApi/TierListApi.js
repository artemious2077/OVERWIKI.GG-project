import { Requester } from '@/utils/Requester/Requester'
const { create } = require('zustand')

const endpoint = '/heroes'

export const useTierHeroes = create((set) => ({
  tierList: [],
  tierRequest: async () => {
    const response = await Requester.get(endpoint)
    set({ tierList: response.data })
  },
}))
