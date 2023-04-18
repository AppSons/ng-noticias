import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  categorias: any[] = [
    {value: 'general', nombre: 'General' },
    {value: 'business', nombre: 'Negocios' },
    {value: 'entertainment', nombre: 'Entretenimiento' },
    {value: 'health', nombre: 'Salud' },
    {value: 'science', nombre: 'Ciencia' },
    {value: 'sports', nombre: 'Deportes' },
    {value: 'technology', nombre: 'Tecnología' },
  ];

  paises: any[] = [
    {value: 'ar', nombre: 'Argentina' },
    {value: 'br', nombre: 'Brasil' },
    {value: 'fr', nombre: 'Francia' },
    {value: 'hu', nombre: 'Hungría' },
    {value: 'mx', nombre: 'México' },
    {value: 'gb', nombre: 'Reino Unido' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
