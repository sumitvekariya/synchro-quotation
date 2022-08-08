import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotationComponent } from './quotation.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    QuotationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    QuotationComponent
  ]
})
export class QuotationModule { }
