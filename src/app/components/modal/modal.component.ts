import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import {
  NgbActiveModal,
  NgbAlertModule,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { BillComponent } from '../bill/bill.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { Bill, Bills } from '../../entities/Bill';
import { BillService } from '../../services/bill.service';
import { AlertCustomComponent } from '../alert-custom/alert-custom.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [BillComponent, CommonModule, AlertCustomComponent, NgbAlertModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  public bills$!: Observable<Bills>;
  public bills?: Bills;
  public bill?: Bill;
  public printed?: boolean = false;

  @Input()
  public header?: string;

  @Input()
  public body?: string;

  @Output()
  public clickToPrint = new EventEmitter<void>();

  @Output()
  public noClicked = new EventEmitter<void>();

  constructor(
    private activeModal: NgbActiveModal,
    private billService: BillService
  ) {}

  public closeModal(): void {
    this.activeModal.close();
  }

  public calculateSubtotal(): number {
    let subtotal = 0;
    if (this.bills) {
      this.bills.forEach((bill: Bill) => {
        subtotal += bill.dishPrice;
      });
    }
    return subtotal;
  }
  
  public calculateTVA(): number {
    const tauxTVA = 0.20;
    
    const subtotal = this.calculateSubtotal();
  
    const TVA = subtotal * tauxTVA;
  
    return TVA;
  }
  
  public calculateTotalAmount(): number {
    const subtotal = this.calculateSubtotal();
    
    const TVA = this.calculateTVA();
  
    const totalAmount = subtotal + TVA;
  
    return totalAmount;
  }
}
