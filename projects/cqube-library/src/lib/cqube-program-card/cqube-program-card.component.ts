import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { IDashboardMenu } from '../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sb-cqube-program-card',
  templateUrl: './cqube-program-card.component.html',
  styleUrls: ['./cqube-program-card.component.scss']
})
export class CqubeProgramCardComponent implements OnInit {

  constructor() { }
  isTextWrapIssueFix: boolean  = false;
  @Input() cardInfo: IDashboardMenu | undefined;
  @Output() onProgramClick: EventEmitter<IDashboardMenu | undefined> = new EventEmitter<IDashboardMenu | undefined>();
  

  ngOnInit(): void {
  }
  onClick(evt:Event):void {
    this.onProgramClick.emit(this.cardInfo);
  }
  len(arr: any){
    return arr.length;
  }

}
