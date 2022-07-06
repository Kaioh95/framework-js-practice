import { writable } from "svelte/store"

export interface TabType {
  tabOptions: string[]  // tabs
  tabText: string[]  // conteúdos dp tab
}

const { update, subscribe } = writable([])

function add(tab: TabType) {
  update(list => {
    list.push(tab)
    return list
  })
}

function change(index: number, tab: TabType) {
  update(list => {
    list[index] = tab
    return list
  })
}

function remove(index: number) {
  update(list => {
    list.splice(index, 1)
    return list
  })
}

export const tabs = {
  add,
  change,
  remove,
  subscribe
}