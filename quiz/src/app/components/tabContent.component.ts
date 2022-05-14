import { Component, Input } from "@angular/core";

export interface TabContent{
    contents: string[];
    currentTab?: number;
}

@Component({
    selector: "app-tabContent",
    template: `
        <div class="textPane">
            <p>{{ currentTab !== undefined ? contents[currentTab] : "Texto do tab não selecionado"}}</p>
        </div>
    `,
    styles: [`
        .textPane{
            padding: 20px;
            margin: 10px 0;
            border-radius: 10px;
            border: 1px solid #ccc;
            background-color: #f0f0f0;
            color: black;
        }
    `]
})

export class TabContentComponent{
    @Input() contents!: string[];
    @Input() currentTab?: number;
}