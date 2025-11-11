import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from "../../../node_modules/@angular/common/common_module.d";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  login: FormGroup;

  @Output() enviado = new EventEmitter<boolean>();

  constructor(private lo: FormBuilder) {
    this.login = this.lo.group({
      correo: ['', [Validators.required], Validators.email],
      contrasena: ['', Validators.required, Validators.minLength(8), Validators.pattern(/.*[0-9].*/)]
    });
  }

  onSubmit() {
    if (this.login.valid) {
      console.log('Login correcto: ', this.login.value);
      this.enviado.emit(true);
    } else {
      this.login.markAllAsTouched();
    }
  }
}
