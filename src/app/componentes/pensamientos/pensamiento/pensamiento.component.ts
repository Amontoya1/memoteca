import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamiento } from '../pensamiento';
import { PensamientoService } from '../pensamiento.service';

@Component({
  selector: 'amr-pensamiento',
  templateUrl: './pensamiento.component.html',
  styleUrls: ['./pensamiento.component.css']
})
export class PensamientoComponent implements OnInit {

  @Input()  pensamento: Pensamiento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
}
  constructor(
    private service: PensamientoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
        this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
            this.pensamento = pensamento
    })
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
