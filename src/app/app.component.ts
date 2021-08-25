import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
export interface PeriodicElement {
  name: string;
  position: string;
  weight: number;
  symbol: string;
  symbol1: string;
  symbol2: string;
  symbol3: string;
  symbol4: string;
  symbol5: string;
}
interface Food {
  value: string;
  viewValue: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Best', name: 'Hydrogen', weight: 1.0079, symbol: 'H', 
  symbol1: 'H', symbol2: 'H', symbol3: 'H', symbol4: 'H', symbol5: 'H' },
  { position: 'Frequent', name: 'Helium', weight: 4.0026, symbol: 'He'
  , 
  symbol1: 'H', symbol2: 'H', symbol3: 'H', symbol4: 'H', symbol5: 'H'
},
  { position: 'Spender', name: 'Lithium', weight: 6.941, symbol: 'Li' 
  , 
  symbol1: 'H', symbol2: 'H', symbol3: 'H', symbol4: 'H', symbol5: 'H'},
  { position: 'Uncertain', name: 'Beryllium', weight: 9.0122, symbol: 'Be'
  , 
  symbol1: 'H', symbol2: 'H', symbol3: 'H', symbol4: 'H', symbol5: 'H' },
  { position: 'Total', name: 'Boron', weight: 10.811, symbol: 'B' 
  , 
  symbol1: 'H', symbol2: 'H', symbol3: 'H', symbol4: 'H', symbol5: 'H'}
];
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'symbol1', 'symbol2', 'symbol3', 'symbol4', 'symbol5'];
  dataSource = ELEMENT_DATA;
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Best' },
    { value: 'pizza-1', viewValue: 'Frequent' }
  ];
  ngOnInit(): void {}
}
