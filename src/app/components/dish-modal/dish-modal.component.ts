import { Component } from '@angular/core';
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

  constructor(private activeModale: NgbActiveModal){}

  public closeModal():void
  {
    this.activeModale.close();
  }

}
