import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
ngOnInit(): void {
  this.refcount = this.paretoValues[0].refCounts;
       this.rate =  this.paretoValues[0].rate;
}
  pareto = true;
  name = 'Angular';
  refcount ;
  rate;
  paretoValues = [{ refCounts: 500, rate: 80 }, { refCounts: 150, rate: 12.87 }];

  slider(evt) {
     if (evt.checked){
       this.refcount = this.paretoValues[0].refCounts;
       this.rate =  this.paretoValues[0].rate;
     } else {
      this.refcount = this.paretoValues[1].refCounts;
      this.rate =  this.paretoValues[1].rate;
     }
  }
}
