import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { NgbActiveModal, NgbAlertModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BillComponent } from '../bill/bill.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { Bills } from '../../entities/Bill';
import { BillService } from '../../services/bill.service';
import { AlertCustomComponent } from '../alert-custom/alert-custom.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [BillComponent, CommonModule, AlertCustomComponent, NgbAlertModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  public bills$!: Observable<Bills>;
  public bills?: Bills;
  public printed?: boolean = false;
  
  @Input()
  public header?: string;

  @Input()
  public body?: string;

  @Output()
  public clickToPrint = new EventEmitter<void>();

  @Output()
  public noClicked = new EventEmitter<void>();

  public ifPrinted: boolean = false;

  constructor(private activeModal: NgbActiveModal, private billService: BillService) { }

  public closeModal(): void {
    this.activeModal.close();
  }

  public onPrintClicked(): void {
    this.clickToPrint.emit();
    this.ifPrinted = true;
  }

}
