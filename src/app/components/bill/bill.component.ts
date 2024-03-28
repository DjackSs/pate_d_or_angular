import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';
import { Observable, map } from 'rxjs';
import { BillService } from '../../services/bill.service';
import { Bill, Bills } from '../../entities/Bill';
import { LogoutComponent } from '../logout/logout.component';
import { CommonModule } from '@angular/common';
import { NavbarService } from '../../services/navbar.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-bill',
  standalone: true,
  imports: [LogoutComponent, CommonModule],
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.scss',
})
export class BillComponent implements OnInit {
  public bills$!: Observable<Bills>;

  @Input()
  public header?: string;

  @Input()
  public body?: string;

  @Output()
  public confirmClicked = new EventEmitter<void>();

  constructor(
    private billService: BillService,
    private navbarService: NavbarService,
    private ngbModal: NgbModal
  ) {}

  ngOnInit(): void {
    this.navbarService.setShowNavbar(true);
    this.bills$ = this.billService.getBills();
  }

  getBillsForTable(bills: Bills, tableNumber: number): Bill[] {
    return bills.filter((bill) => bill.tableNumber === tableNumber);
  }

  getDistinctTables(bills: Bills): number[] {
    const tables: number[] = [];
    bills.forEach((bill) => {
      if (!tables.includes(bill.tableNumber)) {
        tables.push(bill.tableNumber);
      }
    });
    return tables;
  }

  public generateBill(billDetails?: Bill[]): void {
    const modalRef: NgbModalRef = this.ngbModal.open(ModalComponent, {
      centered: true,
      animation: true,
    });

    const modalComponent: ModalComponent = modalRef.componentInstance;

    modalComponent.header = this.header;
    modalComponent.body = this.body;
    modalComponent.bills = billDetails;
    modalComponent.clickToPrint.subscribe(() => {
      modalRef.close();
    });
    modalComponent.noClicked.subscribe(() => modalRef.close());
  }
}
