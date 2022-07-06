import { Component,EventEmitter ,Input, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Tab, TabService } from '../../services/tab.service'

export interface TabFormComponent{
    contents: string[];
    currentTab?: number;
}

@Component({
    selector: "app-TabForm",
    template: `
        <div className="tab-form">
            <h1 className="qst-comp">Tabs</h1>
            <form class="tab-form-class" #tabForm="ngForm" (ngSubmit)="tabForm.valid && submit()">
                <div className="numTabs">
                    <label>Núm.tabs</label>
                    <input type="number" name="length" #numOptions="ngModel" [(ngModel)]="tab.tabOptions.length" min="1" max="5"/>
                </div>

                <div *ngIf="numOptions.dirty && numOptions.errors" class="errors">
                    <div *ngIf="numOptions.errors['min']">
                        Deve haver pelo menos duas opções
                    </div>
                    <div *ngIf="numOptions.errors['max']">
                        Deve haver no máximo cinco opções
                    </div>
                </div>

                <div *ngFor="let o of tab.tabOptions; index as i; trackBy: trackByFn">
                        <div>
                            <label>Título</label>
                            <input class="titulo" type="text" #titleOption="ngModel" [(ngModel)]="tab.tabOptions[i]"
                            />
                            <div *ngIf="titleOption.dirty && titleOption.errors" class="error">
                                <div *ngIf="titleOption.errors['required']">
                                Digite o texto do título do tab
                                </div>
                            </div>
                        </div>
            
                        <div>
                            <label>Conteúdo</label>
                            <textarea class="conteudo" #contentOption="ngModel" [(ngModel)]="tab.tabText[i]"
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
        </div>`,
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
        tabOptions: this.tab.tabOptions,
        tabText: this.tab.tabText
      })
      this.form.reset()
      this.tab = new Tab()
    }
  
    trackByFn(index: number) {
      return index;  
    }
}