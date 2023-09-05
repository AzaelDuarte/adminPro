import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.fb.group({
    name: ['Azael', Validators.required],
    email: ['azael@mail.com', [Validators.required, Validators.email]],
    password: ['1233', Validators.required],
    password2: ['123', Validators.required],
    terminos: [true, Validators.required]
  },
    {
      validators: this.passwordsIguales('password', 'password2')
    } as AbstractControlOptions);

  constructor(private fb: FormBuilder,
              private usuarioService:UsuarioService) { }



  crearUsuario(): void {
    this.formSubmitted = true;
    console.log(this.registerForm);

    if (this.registerForm.invalid) {
      return
    }

    this.usuarioService.crearUsuario(this.registerForm.value)
        .subscribe({
          next: (resp) => {
            console.log(resp);
          },
          error: (error) => {
            console.log(error);
          }
        });


  }


  campoNoValido(campo: string): boolean {
    if (this.registerForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos(): boolean {
    return !this.registerForm.get('terminos')?.value && this.formSubmitted;
  }

  contrasenasNoValidas(): boolean {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if (pass1 !== pass2 && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  passwordsIguales(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {

      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ noEsIgual: true });
      }
    }
  }
}
