import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sb-cqube-info-card',
  templateUrl: './cqube-info-card.component.html',
  styleUrls: ['./cqube-info-card.component.scss']
})
export class CqubeInfoCardComponent implements OnInit {

  constructor() { }

  @Input() name: string = "";
  @Input() value: string = "";
  @Input() tooltip: string = "";

  ngOnInit(): void {
  }

}
