import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
  state: ()=> ({
    toggleNav: true,
  }),
  actions: {
    closeNav () {
      this.toggleNav = !this.toggleNav
    }
  }
})
