import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
      
    });

    // const promesa = new Promise((resolve, reject) => {
    //   if(false){
    //     resolve('hola mundo');
    //   } else {
    //     reject('salió mal');
    //   }
    // });

    // promesa.then( (mensaje) => {
    //   console.log(mensaje);
    // })
    // .catch(err => {
    //   console.log('Error en mi promesa');

    // })
  }

  getUsuarios() {

    const promesa = new Promise(resolve => {
      
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => console.log(body.data));

    });

    return promesa;

  }

}
