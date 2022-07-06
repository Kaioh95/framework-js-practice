import { Component,EventEmitter ,Input, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Tab, TabService } from '../../services/tab.service'


@Component({
    selector: "app-tab-form",
    template: `
    <div class="tab-container">
        <h1 class="tab-comp">Tabs</h1>
        <form class="tab-form" #tabForm="ngForm" (ngSubmit)="tabForm.valid && submit()">
            <div className="numTabs">
                <label>Núm.tabs</label>
                <input type="number" 
                    name="length" 
                    #numOptions="ngModel"
                    [(ngModel)]="tab.tabOptions.length"
                    min="1" max="5"/>
                
                <div *ngIf="numOptions.dirty && numOptions.errors" class="errors">
                    <div *ngIf="numOptions.errors['min']">
                        Deve haver pelo menos uma opção
                    </div>
                    <div *ngIf="numOptions.errors['max']">
                        Deve haver no máximo cinco opções
                    </div>
                </div>
            </div>

            <div *ngFor="let o of tab.tabOptions; index as i; trackBy: trackByFn">
                    <div>
                        <label>Título</label>
                        <input class="titulo"
                            type="text"
                            name="tabTitle-{{i}}"
                            #titleOption="ngModel"
                            [(ngModel)]="tab.tabOptions[i]" required
                        />
                        <div *ngIf="titleOption.dirty && titleOption.errors" class="error">
                            <div *ngIf="titleOption.errors['required']">
                            Digite o texto do título do tab
                            </div>
                        </div>
                    </div>
        
                    <div>
                        <label>Conteúdo</label>
                        <textarea class="conteudo"
                            name="tabContent-{{i}}"
                            #contentOption="ngModel"
                            [(ngModel)]="tab.tabText[i]" required
                        ></textarea>
                        <div *ngIf="contentOption.dirty && contentOption.errors" class="error">
                            <div *ngIf="contentOption.errors['required']">
                            Digite o texto do conteúdo do tab
                            </div>
                        </div>
                    </div>
            </div>

            <div>
                <div class="buttons">
                    <input type="submit" value="Enviar" [disabled]="tabForm.invalid"/>
                </div>
            </div>
        </form>
    </div>
    `,
    styleUrls: ['./tabForm.component.css']
})

export class TabFormComponent{
    @Input() tab: Tab = new Tab();
    @Output() onSubmit = new EventEmitter();
    @ViewChild(NgForm) form!: NgForm;

    constructor(public tbService: TabService) {
    }
  
    submit() {
      this.onSubmit.emit({
        tabOptions: [...this.tab.tabOptions],
        tabText: [...this.tab.tabText]
      })
      this.form.reset()
      this.tab = new Tab()
    }
  
    trackByFn(index: number) {
      return index;  
    }
}

/*

<div className="tab-form">
            <h1 className="qst-comp">Tabs</h1>
</div>
*/