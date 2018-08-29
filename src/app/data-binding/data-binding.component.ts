import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://www.hsi.net.br';

  urlImagem = 'https://fscomps.fotosearch.com/bigcomps/CSP/CSP314/k3143218.jpg';

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  pessoa: any = {
    nome:'def',
    idade: 20

  }

  cursoAngular: boolean = true;

  nomeDoCurso: string = 'Angular';

  valorInicial = "15";

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    swal('botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){

    this.isMouseOver = !this.isMouseOver;

  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }
  constructor() { }

  ngOnInit() {
  }

}
