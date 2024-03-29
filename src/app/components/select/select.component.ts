import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent 
{
  @Input()
  public options!:string[];

  @Input()
  public libelle!:string;
  
  @Output()
  public choiceValue = new EventEmitter<string>();

  constructor(){}


  public onChange(value:string)
  {

    this.choiceValue.emit(value);

  }



}
