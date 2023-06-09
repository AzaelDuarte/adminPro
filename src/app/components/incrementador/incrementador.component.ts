import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.scss']
})
export class IncrementadorComponent implements OnInit{

  @Input('valor') progreso = 0;

  @Input() btnClass = 'btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  cambiarValor(valor:number){

    if(this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    return this.valorSalida.emit(this.progreso);
  }

  onChange(valor:any){
    if(valor > 100){
      this.progreso = 100;
    }

    if(valor < 0){
      this.progreso = 0;
    }

    this.progreso = valor;

    this.valorSalida.emit(this.progreso);
  }
}
