import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `<app-tab-page></app-tab-page>`
})
export class AppComponent {

}
/*
tabOptions = ["tab 1", "tab 2", "tab 3", "tab 4"];
tabText = ["Texto do primeiro tab",
        "Texto do segundo tab",
        "Texto do terceiro tab",
        "Texto do quarto tab"];

<app-tab [tabOptions]="tabOptions" [tabText]="tabText"></app-tab>

*/