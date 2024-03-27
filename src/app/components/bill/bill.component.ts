import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BillService } from '../../services/bill.service';
import { Bill, Bills } from '../../entities/Bill';
import { LogoutComponent } from '../logout/logout.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bill',
  standalone: true,
  imports: [LogoutComponent, CommonModule],
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.scss'
})
export class BillComponent implements OnInit {
  public bills$!: Observable<Bills>;

  constructor(private billService: BillService) {}

  ngOnInit(): void {
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
}