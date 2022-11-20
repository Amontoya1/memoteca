import { Component, OnInit } from '@angular/core';
import { Pensamiento } from '../pensamiento';
import { PensamientoService } from '../pensamiento.service';

@Component({
  selector: 'amr-listar-pensamiento',
  templateUrl: './listar-pensamiento.component.html',
  styleUrls: ['./listar-pensamiento.component.css'],
})
export class ListarPensamientoComponent implements OnInit {
  // listaPensamentos = [
  //   {
  //     conteudo: 'Passo informações para o componente filho',
  //     autoria: 'Componente pai',
  //     modelo: 'modelo3'
  //   },
  //   {
  //     conteudo: 'Minha propriedade é decorada com @Input()',
  //     autoria: 'Componente filho',
  //     modelo: 'modelo2'
  //   },
  //   {
  //     conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim. ',
  //     autoria: '',
  //     modelo: 'modelo1'
  //   },
  // ];

  listaPensamentos: Pensamiento[] = [];

  constructor(private service: PensamientoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}
