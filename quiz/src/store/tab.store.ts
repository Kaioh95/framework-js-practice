import { reactive } from "vue"

export interface TabType {
    tabOptions: string[]
    tabDisplayText: string[]
}

export interface TabStore {
    tabUp: TabType[]
    add: (tbUp: TabType) => void
    update: (index: number, tbUp: TabType) => void
    delete: (index: number) => void
}

export const tabStore = reactive<TabStore>({
    tabUp: reactive<TabType[]>([]),

    add(tbUp: TabType){
        const newTab = {...tbUp}
        newTab.tabOptions = {...tbUp.tabOptions}
        newTab.tabDisplayText = {...tbUp.tabDisplayText}
        this.tabUp.push(newTab)
    },

    update(index: number, tbUp: TabType){
        //this.tabUp[index] = tbUp
        const newTab = {...tbUp}
        newTab.tabOptions = {...tbUp.tabOptions}
        newTab.tabDisplayText = {...tbUp.tabDisplayText}
        this.tabUp[0] = newTab
    },

    delete(index: number) {
        this.tabUp.splice(index, 1)
    }
})
