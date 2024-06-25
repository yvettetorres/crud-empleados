import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto3';
  empleados=[
    {name: "Hugo", position:"Programador Jr",salary:"10000",age:"15",sex:"M"},
    {name: "Paco", position:"Programador Sr",salary:"15000",age:"18",sex:"M"},
    {name: "Luis", position:"Administrador red",salary:"40000",age:"21",sex:"M"}
  ]
  modelo={name:"Yvette",position:"Jefa",salaey:"50000",age:"19",sex:"F"};
  addEmpleado():void{
    //Permite agregar un empleado al arreglo de empleados
  }
  delateEmpleado():void{
    //Permite eliminar un empleado del arreglo de empleados
  }
  ediEmpleado():void{
    //Permite seleccionar un empleados del arreglo de empleados para su actualización
  }
  ipdate  ediEmpleadompleado():void{
    //pPermite actualizar un empleado en el arreglo de empleados 
  }
}
