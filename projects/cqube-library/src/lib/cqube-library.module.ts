import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CqubeLibraryComponent } from './cqube-library.component';
import { CqubeInfoCardComponent } from './cqube-info-card/cqube-info-card.component';
import { CqubeProgramCardComponent } from './cqube-program-card/cqube-program-card.component';



@NgModule({
  declarations: [
    CqubeLibraryComponent,
    CqubeInfoCardComponent,
    CqubeProgramCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CqubeLibraryComponent,
    CqubeInfoCardComponent,
    CqubeProgramCardComponent
  ]
})
export class CqubeLibraryModule { }
