import { Component, EventEmitter, Input, Output } from "@angular/core";

export interface ButtonsTab{
    tabOptions: string[];
    selection?: number; 
}

@Component({
    selector: "app-tabButtons",
    template: `
        <button *ngFor="let tabOption of tabOptions; let i = index"
            [ngClass]="{selected: i === selection}"
            (click)="onSelection.emit(i)"
        >
            {{ tabOption }}
        </button>
    `,
    styles: [`
        button {
            margin-right: 15px;
            font-size: 15px;
            /*background-color: #ccc;*/
            background-color: white;
            border: 0px solid rgb(118, 118, 118);
            border-radius: 0px;
            padding: 2px 5px;
        }

        .selected {
            font-weight: bold;
            background-color: #aaa;
            border-bottom: 3px solid #2062ed;
            background-color: white;
        }
    `]
})

export class TabButtonsComponent{
    @Input() tabOptions!: string[];
    @Input() selection?: number;
    @Output() onSelection = new EventEmitter<number>()
}