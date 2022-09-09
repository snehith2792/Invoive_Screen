import { Component, OnInit, ViewChild, NgZone, ElementRef  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  invoiceForm: any = FormGroup
  // isSelectAll: boolean = false;
  // title = 'dataTableDemo';
 
  // dtOptions: DataTables.Settings = {};
  // posts: any;

  fieldArray: Array<any> = [{
    "sno": "123455",
    "code": "7895255",
    "contry": "India",
    "goods": "84616463",
    "commodity": "6894",
    "quality": "120",
    "packageType": "testing",
    "status":"Active"
},{
  "sno": "123456",
  "code": "7895255",
  "contry": "India",
  "goods": "84616463",
  "commodity": "6894",
  "quality": "120",
  "packageType": "testing",
  "status":"Inactive"
},{
  "sno": "123457",
  "code": "7895255",
  "contry": "India",
  "goods": "84616463",
  "commodity": "6894",
  "quality": "120",
  "packageType": "testing",
  "status":"Inactive"
}];
  newAttribute: any = {};
  isDisplayRow:boolean=false;
    addFieldValue() {
      this.isDisplayRow == true
      
      this.fieldArray.unshift(this.newAttribute)
      this.newAttribute = {};
      this.isDisplayRow == false
      console.log("this.fieldArray", this.fieldArray);
      
    }
  
 
  constructor(private fb:FormBuilder,private http: HttpClient, ) {
 
    // this.http.get('http://jsonplaceholder.typicode.com/posts')
    //   .subscribe(posts => {
    //     this.posts = posts;
    // }, error => console.error(error));
  }
 
  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      newAttribute: [''],
      
    });
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   processing: true
    // };
  }

  
  // checklist:any;
  checkedList:any;
  masterSelected:boolean = false;

  checkUncheckAll() {
    for (var i = 0; i < this.fieldArray.length; i++) {
      this.fieldArray[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }
  
  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.fieldArray.every(function(field:any) {
      field.isSelected == true;
    })
      
    this.getCheckedItemList();
    
  }

  // Get List of Checked Items
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.fieldArray.length; i++) {
      if(this.fieldArray[i].isSelected)
      this.checkedList.push(this.fieldArray[i]);
    }
    // this.checkedList = JSON.stringify(this.checkedList);
    
  }

  
  deleteFieldValue() {
    console.log("this.checkedList", this.checkedList);
    for (let index = 0; index < this.checkedList.length; index++) {
      const element = this.checkedList[index];
      for (let i = 0; i < this.fieldArray.length; i++) {
        const array = this.fieldArray[i];
        if (element.sno == array.sno) {
          this.fieldArray.splice(i,1);
        }
      }
    // this.fieldArray.splice(index, element);
      
    console.log("this.fieldArray", this.fieldArray);
    }
    
  }
}
