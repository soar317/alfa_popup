import { Component } from '@angular/core';



@Component({
  selector: 'projectAlfa',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<div  style="padding: 50px" class="Source_input_controls">'
  + '<h4>Select a Source: </h4>'
  + ' <div>'
  + ' <label>'
  + ' <input #Object_S name="Source" type="radio" value="Object" (click)="Source = Object_S.value" />'
  + ' Object'
  + ' </label>'
  + ' </div>'
  + ' <div>'
  + '<label>'
  + '  <input #Process_S name="Source" type="radio"  value="Process" (click)="Source = Process_S.value" />'
  + '  Process'
  + ' </label>'
  + '</div>'
  + ' <div>'
  + ' Selected Source is <strong>{{Source}}</strong>'
  + '</div>'
  + '</div>'
  + '<div style="padding: 50px" class="Des_input_controls" >'
  + '<h4>Select a Destination: </h4>'
  + ' <div>'
  + ' <label>'
  + ' <input #Object_D name="destination" type="radio" value="Object" (click)="destination = Object_D.value" />'
  + ' Object'
  + ' </label>'
  + ' </div>'
  + ' <div>'
  + '<label>'
  + '  <input #Process_D name="destination" type="radio"  value="Process" (click)="destination = Process_D.value" />'
  + '  Process'
  + ' </label>'
  + '</div>'
  + ' <div>'
  + ' Selected Destination is <strong>{{destination}}</strong>'
  + '</div>'
  + '</div>'
  +'<br>'
  +'<sm-button style="margin-left: 50px"  (click)=\"myModal.show()\">open info window</sm-button> '
  +'<sm-modal  title="popup Info window" #myModal>'
  +'<modal-content >'
  +'<table style="width: 50%">'
  +'<tr>'
  +' <th>OPM Link </th>'
  +'<th>OPL</th>'
  +'<th>Info</th>'
  +'</table>'
   +'<br> <br> <sm-button>OK</sm-button>'
  +'</modal-content>'
  +'</sm-modal>'


})
export class AppComponent {
Source:string;
destination:string;
 popupwin(){
console.log(this.Source+"  "+this.destination);

}

}
