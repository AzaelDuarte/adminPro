import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

   private linkTheme = document.querySelector('#theme');


  constructor() {
    const theme = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    this.linkTheme?.setAttribute('href', theme);
   }


   changeTheme(theme:string):void{
    const url = `./assets/css/colors/${theme}.css`;
    
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }


  checkCurrentTheme():void {

    const links = document.querySelectorAll('.selector');
  
    links.forEach(element => {
      //Cada que cambie el tema buscamos el elemento que tenga la clase working y la removemos
      //No truena sino existe
      element.classList.remove('working');

      //almacenamos el tema del boton atraves de la directiva personalizada que contiene el tema
      const btnTheme = element.getAttribute('data-theme');

      // utilizamos la ruta que se agrega a esa etiqueta pero le pasamos el tema que se extrajo en el paso anterior
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      
      //Este valor que obtenemos es el que axtraemos del localStorage y lo hacemos para ver cual es el tema actual
      const currentTheme = this.linkTheme?.getAttribute('href');

      //Ahora, si el tema actual que sacamos del localStorage es igual a uno que tenemos en la lista
      //a ese elemento le ponemos la clase de la flecha
      if(btnThemeUrl === currentTheme){
        element.classList.add('working');
      }
    });
  }
}
