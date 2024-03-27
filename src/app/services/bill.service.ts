import { Injectable } from '@angular/core';
import { Bill, Bills } from '../entities/Bill';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  public readonly billKey: string = 'bill';

  public bills?: Bills[];
  public bill?: Bill;

  constructor(
    private http: HttpClient,
    private serviceStorage: StorageService
  ) {}

  public getBills(): Observable<Bills> {
    return this.http.get<Bills>(
      'http://localhost:8080/pate_d_or/commandes/soldout'
    );
  }

  public saveBill(bill: Bill): void {
    this.serviceStorage.set(this.billKey, JSON.stringify(bill));
  }
}
