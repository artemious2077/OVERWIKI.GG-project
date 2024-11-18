import { Requester } from '@/utils/Requester/Requester'
import { create } from 'zustand'

const endpoint = '/gaming_guide'

export const useGuideApi = create((set) => ({
  guideData: [],
  guideRequest: async () => {
    const response = await Requester.get(endpoint)
    set({ guideData: response.data })
  },
}))
