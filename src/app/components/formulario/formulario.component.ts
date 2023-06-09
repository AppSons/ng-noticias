import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() paramSelect = new EventEmitter<any>;

  categoriaSelect = 'general';
  paisSelect = 'us';

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
    {value: 'us', nombre: 'Estados Unidos' },
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

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSelect,
      pais: this.paisSelect,
    }

    this.paramSelect.emit(PARAMETROS);
  }

}
