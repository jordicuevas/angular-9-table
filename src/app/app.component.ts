import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
}
interface Food {
  value: string;
  viewValue: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Best', name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 'Frequent', name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 'Spender', name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 'Uncertain', name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 'Total', name: 'Boron', weight: 10.811, symbol: 'B' }
];
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Best' },
    { value: 'pizza-1', viewValue: 'Frequent' }
  ];
  ngOnInit(): void {}
}
