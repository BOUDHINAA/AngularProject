import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MangeProductRoutingModule } from './mange-product-routing.module';
import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [
    AddproductComponent
  ],
  imports: [
    CommonModule,
    MangeProductRoutingModule
  ]
})
export class MangeProductModule { }
