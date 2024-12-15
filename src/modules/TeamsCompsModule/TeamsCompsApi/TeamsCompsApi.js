import { Requester } from '@/utils/Requester/Requester'
import { create } from 'zustand'

const endpoint = '/teams_comps'

export const useComps = create((set) => ({
  teamsComps: [],
  compsRequest: async () => {
    const response = await Requester.get(endpoint)
    // console.log('Data fetched:', response.data)
    set({ teamsComps: response.data })
  },
}))
