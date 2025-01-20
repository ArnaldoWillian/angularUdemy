import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { ButtonComponent } from '../button/button.component';
import { CarRoxoButtonComponent } from '../car-roxo-button/car-roxo-button.component';



@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    CardRoxoComponent,
    CarRoxoButtonComponent

  ],
  imports: [
    CommonModule

  ],
  exports:[
    CardComponent,
    CardRoxoComponent,
    ButtonComponent,
    CarRoxoButtonComponent,
  ]
})
export class CardsModule { }
