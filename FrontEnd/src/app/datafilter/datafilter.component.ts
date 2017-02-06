import { Component, OnInit, OnChanges } from '@angular/core';
import { Employee } from '../commonClasses/employee';
import { OperatorListRequest } from '../commonClasses/operator-list-request';
import { GetdateService } from '../service/getdate.service';
import { DatafilterService } from '../service/datafilter.service';
import { Observable } from 'rxjs';
import { HttpService } from '../service/http.service';


@Component({
  selector: 'app-datafilter',
  templateUrl: './datafilter.component.html',
  styleUrls: ['./datafilter.component.css']
})
export class DatafilterComponent implements OnInit, OnChanges {

  constructor(

    private getdateService: GetdateService,
    private datafilterService: DatafilterService,
    private httpService: HttpService
  ) { }
  employeeSet: Employee;
  employees: any;


  ngOnInit() {
    this.Reset();
    this.showdefaultValue = true;
  }

  ngOnChanges() {
    this.Reset();
  }

  SelectedValue: string = null;
  date_Value;
  SelectedValueno: string = null;
  SelectedValuename: string = null;
  SelectedValueband: string = null;
  SelectedValueop: string = null;
  public operatorList: any[];
  FieldName: string;
  showdefaultValue: boolean

  // parseDate(dateString: string): Date {
  //     if (dateString) {
  //         this.date_Value= new Date(dateString);
  //         return(this.date_Value);
  //     } else {
  //         return null;
  //     }
  // }

  // FetchEmployeeData(fieldId: number) {
  //   console.log(fieldId);
  //   this.employeeRecord.details.forEach(element => {
  //     if (fieldId == element.id) {
  //       console.log(element.value);
  //       //        this.validOperatorSetRequest.FieldName = element.value;
  //       this.FieldName = element.value;
  //     }
  //   });
  //   this.operatorList = this.sendOperatorRequest(this.FieldName);
  //   console.log(this.operatorList);
  // }

  FetchEmployeeData(fieldId: number): any {
    console.log(" reached service ");
    console.log(fieldId);

    this.employeeRecord.details.forEach(element => {
      if (fieldId == element.id) {
          console.log(element.value);
              //        this.validOperatorSetRequest.FieldName = element.value;
          this.FieldName = element.value;
      }
    });

    var response = this.httpService.sendOperatorRequest(this.FieldName).subscribe(
      (data) => {
            this.operatorList = data;
          }
        );

    console.log(response + "final");
  }

    Reset():Observable <any> {
    console.log(" reached service");
    this.showdefaultValue = true;
    var holder;
    var response = this.httpService.completeTableData().subscribe(
      (data) => {
        if (data == null) {
          // this.router.navigate(['/main']);
          alert("data not available !");
        }
        else {
          console.log(data);
          this.employees = data;
        }
      });
      return null;
  }


  FilterData() {
    this.showdefaultValue = false;
  }

  employeeRecord = {
    "details": [
      {
        "id": 1,
        "name": "--Select--",
        "value": ""
      },
      {
        "id": 2,
        "name": "Employee Number",
        "value": "EmployeeNo"
      },
      {
        "id": 3,
        "name": "Employee Name",
        "value": "EmployeeName"
      },
      {
        "id": 4,
        "name": "Date of Joining",
        "value": "DateOfJoining"
      },
      {
        "id": 5,
        "name": "Designation",
        "value": "Designation"
      },
      {
        "id": 6,
        "name": "Band",
        "value": "Band"
      }
    ]
  };

  filterEmployeeNo = {
    "operators": [
      {
        "id": "1",
        "name": "--Select--"
      },
      {
        "id": "2",
        "name": "<"
      },
      {
        "id": "3",
        "name": ">"
      },
      {
        "id": "4",
        "name": "<="
      },
      {
        "id": "5",
        "name": ">="
      },
      {
        "id": "6",
        "name": "<>"
      }
    ]
  };
  filterEmployeeName = {
    "operators": [
      {
        "id": "1",
        "name": "--Select--"
      },
      {
        "id": "2",
        "name": "="
      },
      {
        "id": "3",
        "name": "<>"
      },
      {
        "id": "4",
        "name": "LIKE"
      }
    ]
  };
  filterEmployeeDOJ = {
    "operators": [
      {
        "id": "1",
        "name": "--Select--"
      },
      {
        "id": "2",
        "name": "="
      },
      {
        "id": "3",
        "name": ">="
      },
      {
        "id": "4",
        "name": "<="
      },
      {
        "id": "5",
        "name": ">"
      },
      {
        "id": "6",
        "name": "<"
      },
      {
        "id": "7",
        "name": "BETWEEN"
      }
    ]
  };
  filterOperator = {
    "operators": [
      {
        "id": "1",
        "name": "--Select--"
      },
      {
        "id": "2",
        "name": "IS"
      },
      {
        "id": "3",
        "name": "IS NOT"
      }
    ]
  };
}

