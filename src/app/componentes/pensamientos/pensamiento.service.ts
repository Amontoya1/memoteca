import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamiento } from './pensamiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamientoService {
  private readonly API = 'http://localhost:3000/pensamientos'

  constructor(private http: HttpClient) { }

 
  listar(): Observable<Pensamiento[]> {
    return this.http.get<Pensamiento[]>(this.API)
  }

  criar(pensamento: Pensamiento): Observable<Pensamiento> {
    return this.http.post<Pensamiento>(this.API, pensamento)
  }

  editar(pensamento: Pensamiento): Observable<Pensamiento> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamiento>(url, pensamento )

  }

  excluir(id: number): Observable<Pensamiento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamiento>(url)
  }

  buscarPorId(id: number): Observable<Pensamiento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamiento>(url)
  }
}
