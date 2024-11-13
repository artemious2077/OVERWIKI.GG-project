import { Requester } from '@/utils/Requester/Requester'
import { create } from 'zustand'

const endpoint = '/under_banner_on_pages'

export const useUnderBanner = create((set) => ({
  underBanner: [],
  underBannerRequest: async () => {
    const response = await Requester.get(endpoint)
    set({ underBanner: response.data })
  },
}))
