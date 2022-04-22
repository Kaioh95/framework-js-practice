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
        button{
            width: 80px;
            margin-right: 10px;
            padding: 2px 5px;
            border-radius: 3px;
            border: 1px solid #ccc;
            background-color: #aaa;
        }

        .selected{
            font-weight: bold;
            background-color: rgb(118, 118, 118);
        }
    `]
})

export class TabButtonsComponent{
    @Input() tabOptions!: string[];
    @Input() selection?: number;
    @Output() onSelection = new EventEmitter<number>()
}