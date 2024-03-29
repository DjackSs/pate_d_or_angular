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
import { AlertCustomComponent } from '../alert-custom/alert-custom.component';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../entities/Restaurant';
import { HeaderRestaurantComponent } from '../header-restaurant/header-restaurant.component';

@Component({
  selector: 'app-bill',
  standalone: true,
  imports: [LogoutComponent, CommonModule, AlertCustomComponent, HeaderRestaurantComponent],
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.scss',
})
export class BillComponent implements OnInit {
  public bills$!: Observable<Bills>;
  public restaurant!: Restaurant | null;

  @Input()
  public header?: string;

  @Input()
  public body?: string;

  @Output()
  public confirmClicked = new EventEmitter<void>();

  @Output()
  public clickToPrint = new EventEmitter<void>();

  public ifPrinted: boolean = false;


  constructor(
    private restaurantService: RestaurantService,
    private billService: BillService,
    private navbarService: NavbarService,
    private ngbModal: NgbModal
  ) {}

  ngOnInit(): void {
    this.restaurant = this.restaurantService.getRestaurant();
    
    if (this.restaurant)
    this.bills$ = this.billService.getBillsByIdRestaurant(
      this.restaurant.id
      
      );
    this.navbarService.setShowNavbar(true);
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
