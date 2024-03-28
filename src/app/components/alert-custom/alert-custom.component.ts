import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-custom',
  standalone: true,
  imports: [NgbAlertModule, CommonModule],
  templateUrl: './alert-custom.component.html',
  styleUrl: './alert-custom.component.scss'
})
export class AlertCustomComponent {

}
