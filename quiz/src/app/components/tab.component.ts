import { Component, Input, Output } from "@angular/core";
import { ButtonsTab } from "./tabButtons.component";
import { TabContent } from "./tabContent.component";

@Component({
    selector: 'app-tab',
    template: `
        <div class="tabPane">
            <app-tabButtons
                [tabOptions]="tabOptions"
                [selection]="currentTab"
                (onSelection)="select($event)"
            >

            </app-tabButtons>

            <app-tabContent
                [contents]="tabText"
                [currentTab]="currentTab"
            >
            </app-tabContent>

        </div>
    `,
    styles: [`
        .tabPane{
            padding: 50px;
        }
    `]
})

export class TabComponent{
    @Input() tabOptions!: string[]
    @Input() tabText!: string[]
    /*tabOptions = ["tab 1", "tab 2", "tab 3", "tab 4"];
    tabText = ["Texto do primeiro tab",
            "Texto do segundo tab",
            "Texto do terceiro tab",
            "Texto do quarto tab"];*/

    currentTab: number | undefined;

    select(tabIndex: number){
        this.currentTab = tabIndex;
    }
}