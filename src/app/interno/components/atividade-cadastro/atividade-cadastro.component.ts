import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atividade-cadastro',
  templateUrl: './atividade-cadastro.component.html',
  styleUrls: ['./atividade-cadastro.component.css']
})
export class AtividadeCadastroComponent implements OnInit {

  cities1 = [
    {label: 'Select City', value: null},
    {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
    {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
    {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
    {label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}},
    {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
];

  constructor() { }

  ngOnInit(): void {
  }

}
