import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dish } from '../../entities/Table';
import { Order } from '../../entities/order';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dish-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dish-modal.component.html',
  styleUrl: './dish-modal.component.scss'
})
export class DishModalComponent 
{

  public modalTitle!:string;
  public modalDishes:any[] = [];

  @Output()
  public customDish = new EventEmitter<any[]>();

  constructor(private activeModale: NgbActiveModal){}

  public closeModal()
  {
    this.activeModale.close();
  }

  public closeSaveModal():void
  {
    this.customDish.emit(this.modalDishes);

    this.activeModale.close(this.modalDishes);
  }

  public addDish(addDish:Dish, amount:number)
  {
    for(let dish of this.modalDishes)
    {
      if(dish.dish.name === addDish.name)
      {
        dish.orderAmount+= amount;

        if(dish.orderAmount < 0) dish.orderAmount = 0;
      }
    }

  }

}
