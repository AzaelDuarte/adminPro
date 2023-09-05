import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public base_url = environment.base_URL;

  constructor(private http: HttpClient) { }


  crearUsuario(formData:RegisterForm) {

    return this.http.post(`${this.base_url}/usuarios`, formData);
    
  }
}
