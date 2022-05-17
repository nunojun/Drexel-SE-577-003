import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
  state: () => ({
    index: 0
  }),
  getters: {
    nextIndex: (state) => (state.index + 1) % 3
  },
  actions: {
    getNextIndex() {
      this.index = (this.index + 1) % 3
    }
  }
})