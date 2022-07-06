import { Component } from "@angular/core";
import { Tab, TabService } from "../services/tab.service";

@Component({
  selector: 'app-tab-page',
  template: `
    <app-tab-form (onSubmit)="updateTab(0, $event)"></app-tab-form>
    <div class="tabPane" *ngFor="let tab of tabService.tabs; index as i">
      <!--button class="erase" (click)="deleteQuestion(i)">X</button-->
      <app-tab
        [tabOptions]="tab.tabOptions"
        [tabText]="tab.tabText"
      >
      </app-tab>
    </div>
  `,
  styles: [`
    .box {
      padding: 10px;
      border: 1px solid #aaf;
      border-radius: 5px;
      margin: 10px;
    }
    .erase {
      float: right;
      z-index: 2;
    }
    .tabPane {
        padding: 20px;
        box-shadow: 5px 4px 10px #ccc;
        border-radius: 5px;
        margin: 10px;
        width: 450px;
        float: right;
    }
  `]
})
export class TabPageComponent {
  constructor(public tabService: TabService) {}

  addTab(tab: Tab) {
    this.tabService.add(tab)
  }

  updateTab(index: number, tab: Tab){
      this.tabService.update(index, tab)
  }

  deleteTab(index: number) {
    this.tabService.delete(index)
  }
}