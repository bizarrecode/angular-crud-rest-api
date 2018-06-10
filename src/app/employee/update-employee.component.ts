import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './update-employee.component.html',
})
export class UpdateEmployeeComponent implements OnInit {

  employee: any = {};

  constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService) {
    
  }

  ngOnInit() {
    this.employeeService.getEmployee(this.route.snapshot.params['id'])
      .subscribe(data => {
        this.employee = data;
      });
  };

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.employee)
      .subscribe(data => {
        alert("Employee updated successfully.");
        this.router.navigate(['/employees']);
      });

  };

}