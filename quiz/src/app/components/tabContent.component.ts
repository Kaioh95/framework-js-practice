import { Component, Input } from "@angular/core";

export interface TabContent{
    contents: string[];
    currentTab?: number;
}

@Component({
    selector: "app-tabContent",
    template: `
        <div class="tabContentPane">
            <p>{{ currentTab !== undefined ? contents[currentTab] : "Texto do tab não selecionado"}}</p>
        </div>
    `,
    styles: [`
        .tabContentPane {
            padding: 20px;
            margin: 10px 0;
            border-radius: 10px;
            border: 0px solid #aaa;
            /*background-color: #f0f0f0;*/
            background-color: white;
            overflow: auto;
        }
    `]
})

export class TabContentComponent{
    @Input() contents!: string[];
    @Input() currentTab?: number;
}