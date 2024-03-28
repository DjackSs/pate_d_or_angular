import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from '../../entities/order';
import { Card } from '../../entities/Table';
import { NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DishModalComponent } from '../dish-modal/dish-modal.component';

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

  constructor( private modal: NgbModal){}

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


  public dishModal(dishCategory:any)
  {

    //1 - ouvre la modale avec le composant dedan
    const modalRef: NgbModalRef = this.modal.open(DishModalComponent, {size: "lg"});
    //2 - récupère le composant dans la modale
    const component: DishModalComponent = modalRef.componentInstance;
    //3 - attribus une valeure à un attribut du composant de la modale
    component.modalTitle = dishCategory.libelle;

    for(let dish of this.card.dishes)
    {
      if(dish.category === dishCategory.value)
      {
        component.modalDishes.push(dish);
      }
    }
    
    

  }

  public saveDishes()
  {

  }

}
