import { create } from 'zustand'
import { Requester } from '@/utils/Requester/Requester'

const endpoint = '/heroes'

export const useOtherHeroes = create((set) => ({
  otherHeroes: [],
  otherHeroesRequest: async (heroClass) => {
    const response = await Requester.get(endpoint)
    // Динамичная фильтрация героев по классу конкретного героя
    const heroFilter = response.data.filter(
      (hero) => hero.class_description === heroClass,
    )
    const randomHeroes = heroFilter.sort(() => 0.5 - Math.random())
    const selectedRandomHeroes = randomHeroes.slice(0, 6)
    set({ otherHeroes: selectedRandomHeroes })
  },
}))
