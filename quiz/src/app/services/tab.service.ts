import { Injectable } from "@angular/core";

export class Tab {
  selection?: number // índice da opção selecionada, se houver

  constructor(
    public tabOptions: string[] = ['tab'],
    public tabText: string[] = ['Sem conteúdo']
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class TabService {
  tabs: Tab[] = []

  add(tab: Tab) {
    this.tabs.push(tab)
  }

  delete(index: number) {
    this.tabs.splice(index, 1)
  }

  update(index: number, tab: Tab) {
    this.tabs[index] = tab
  }
}