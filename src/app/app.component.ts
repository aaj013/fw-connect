import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AppService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private appService: AppService) {
  }
  title = 'fw-connect';
  scrap='test';

  //testConnection:function
  testConnection(){
    this.appService.getVersion()
      .subscribe(
      data => {
        let obj = JSON.parse(data);
        console.log(obj);
        this.scrap=obj.version;
      },
      error => alert(error),
      () => {
        console.log("end!");
      }
      );
  }
  
  //getProcess :function
  getProcess(){
    this.appService.getProcessDefs()
    .subscribe(
      data => {
        let obj=JSON.parse(data);
        console.log(obj);
        let string=
        '<table class="table table-bordered">'+
        '<thead>'+
        '<tr>'+
        '<th>Process</th>' +
        '<th>key</th>' +
        '</tr>' +
        '</thead>'+
        '<tbody>';
        let array=obj.data;
        array.forEach(element => {
          string+=
          '<tr>'+
          '<td>' + element.name + '</td>'+
          '<td>' + element.key + '</td>' +
          '</tr>';
        });
        string += '</tbody></table>'
        this.scrap=string;
      },
      error => alert(error),
      () => {
        console.log("end!");
      }
      );
  }

  getReqForm(){
    let html=
    '<form class="form-horizontal">'+
    '<input type="text" placeholder="Enter your Name" #empName />' +
    '<input type="text" placeholder="Enter number of days" #days />' +
    '</form>';
    this.scrap = html;
  }

}
