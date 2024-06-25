import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-empleados';
  empleados=[
    {name:'Hugo',position:'Programador Jr.',salary:10000,age:15,sex:'M'},
    {name:'Paco',position:'Programador Sr.',salary:15000,age:18,sex:'M'},
    {name:'Luis',position:'Administrador Red',salary:40000,age:21,sex:'M'}

  ]
  modelo:any={};
  addEmpleado():void{
    //Permite agregar un empleado al arreglo de empleado
    this.empleados.push(this.modelo);

  }
  deleteEmpleado():void{
    //Permite eliminar un empleado del arreglo de empleado

  }
  editEmpleado():void{
    //Permite seleccionar un empleado del arreglo de empleado para su actualización
    
  }
  updateEmpleado():void{
    //Permite actualizar un empleado en el arreglo de empleados
  }
}