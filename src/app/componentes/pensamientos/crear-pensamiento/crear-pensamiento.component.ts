import { PensamientoService } from './../pensamiento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'amr-crear-pensamiento',
  templateUrl: './crear-pensamiento.component.html',
  styleUrls: ['./crear-pensamiento.component.css']
})
export class CrearPensamientoComponent implements OnInit {
  
  pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: "modelo1"
  }

  constructor(
    private service: PensamientoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
