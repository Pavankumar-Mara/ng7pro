import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from "../data.service";  

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {
 
  registerForm: FormGroup;
  success = false;
  submitted = false;
  submitedName = false;
  submitDOB = false;
  submitReason = false;
  submitCCTC = false;
  unamePattern = "^[a-zA-Z]+$";
  allClear = false;
  flag1 = true;
  flag2 = true;
  flag3 = true;
  flag4 = true;

  constructor(private formbuilder: FormBuilder,  public _dataService: DataService) {
    this.registerForm = this.formbuilder.group({
      firstName: ['', [Validators.pattern(this.unamePattern), Validators.required]],
      dateOfBirth: ['', Validators.required],
      gender: [''],
      reasonForJobChange: ['', Validators.required],
      cctc: ['', Validators.required],
      ectc: ['']
    })

  }

  ngOnInit() {

  }

  onEnterName(searchValue: string) {
    this._dataService.setOption('name', searchValue);
    if (!searchValue || searchValue.search(this.unamePattern)) {
      this.submitedName = true;
      this.flag1 = true;
  }else{
    this.flag1 = false;
  }
  this.registerButton();
}

  onEnterDOB(searchValue: Date) {
    this._dataService.setOption('dob', searchValue);
    if (!searchValue) {
      this.submitDOB = true;
      this.flag2 = true;
    }
    else{
      this.flag2 = false;
    }
    this.registerButton();
  }

  onEnterReason(searchValue: string) {
    this._dataService.setOption('reasonForChange', searchValue);
    if (!searchValue) {
      this.submitReason = true;
      this.flag3 = true;
    }else{
      this.flag3 = false;
    }
    this.registerButton();
  }

  onEnterCCTC(searchValue: number) {
    this._dataService.setOption('cctc', searchValue);
    if (!searchValue) {
      this.submitCCTC = true;
      this.flag4 = true;
    }else{
      this.flag4 = false;
    }
    this.registerButton();

  }

  onEnterECTC(searchValue: number) {
    this._dataService.setOption('ectc', searchValue);
  }

  onEnterGender(searchValue: string) {
    this._dataService.setOption('gender', searchValue);
  }

  registerButton() {
    this.allClear = false;
    console.log('dfdf: ',this.flag1)
    if (!this.flag1 && !this.flag2 && !this.flag3 && !this.flag4) {
      this.allClear = true;
    }
  } 
}
