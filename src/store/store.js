import { create } from 'zustand'
import { Requester } from '@/utils/Requester/Requester'

const endpoint = '/error_images'

export const errorImage = create((set) => ({
  errorData: [],
  errorRequest: async () => {
    const response = await Requester.get(endpoint)
    set({ errorData: response.data })
  },
}))

export const useLayout = create((set) => ({
  isErrorPage: false,
  setErrorPage: (value) => set({ isErrorPage: value }),
}))
