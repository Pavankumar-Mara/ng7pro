import { Component,NgModule } from '@angular/core';
import {TabModule} from 'angular-tabs-component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@NgModule({
  imports: [
    
    TabModule
  ],
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng7';
  
}
