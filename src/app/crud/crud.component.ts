import { Component, OnInit } from '@angular/core';
import { dataCrud } from './dataCrud.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  studentList: dataCrud[] = [];

  students = new dataCrud();

  save(){
    this.students.id = this.studentList.length + 1;
    this.studentList.push(this.students);
    this.students = {};
  }

  constructor() { }

  ngOnInit(): void {
  }

}
