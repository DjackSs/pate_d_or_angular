import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../../entities/order';
import { Card } from '../../entities/Table';

@Component({
  selector: 'app-dishes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.scss'
})
export class DishesComponent 
{
  @Input()
  public order!: Order;

  @Input()
  public card!:Card;

  public dishesCategories!:any[];

  constructor(){}

  ngOnInit()
  {
    this.dishesCategories =
    [
      {
        libelle:"Entrées",
        value: "entry"
       },
       {
        libelle:"Plats",
        value: "dish"
       },
       {
        libelle:"Desserts",
        value: "desert"
       },
       {
        libelle:"Boissons",
        value: "beverage"

       }
    ];

  }


  public dishModal(dishCategoryName:string)
  {
    console.log(dishCategoryName);

  }

  public saveDishes()
  {

  }

}
