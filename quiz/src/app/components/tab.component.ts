import { Component } from "@angular/core";
import { ButtonsTab } from "./tabButtons.component";

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

            <div class="textPane">
                <p>Texto do 
                    {{currentTab === undefined
                        ? "tab nao selecionado" : tabText[currentTab] + ' tab'
                    }}
                </p>
            </div>

        </div>
    `,
    styles: [`
        .tabPane{
            padding: 50px;
        }
        .textPane{
            width: 350px;
            padding: 20px;
            margin: 10px 0;
            border-radius: 10px;
            border: 1px solid #ccc;
            background-color: #f0f0f0;
        }
    `]
})

export class TabComponent{
    tabOptions = ["tab 1", "tab 2", "tab 3", "tab 4"];
    tabText = ["primeiro", "segundo", "terceiro", "quarto"];

    currentTab: number | undefined;

    select(tabIndex: number){
        this.currentTab = tabIndex;
    }
}