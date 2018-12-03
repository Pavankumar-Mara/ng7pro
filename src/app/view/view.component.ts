import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";  

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public data;

  constructor(public _dataService: DataService) {
    this.data = _dataService.getOption();
   }  
   
  ngOnInit() {
  }

}
