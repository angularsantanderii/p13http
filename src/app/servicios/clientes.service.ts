import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class ClientesService {

  endpoint = environment.apiUrl + 'clientes/';

  constructor(private httpClient: HttpClient) { }

  getClientes(): Observable<any> {
    return this.httpClient.get(this.endpoint)
                          .pipe(
                            map((resp: any) => {
                              // codigo para manipular la respuesta en caso necesario
                              return resp;
                            })
                          )
  }

  searchClientes(term: string): Observable<any> {
    return this.httpClient.get(`${this.endpoint}search/${term}`)
                          .pipe(
                            map((resp: any) => {
                              // codigo para manipular la respuesta en caso necesario
                              return resp;
                            })
                          )
  }

  getClienteById(_id: string): Observable<any> {
    return this.httpClient.get(`${this.endpoint}${_id}`)
                          .pipe(
                            map((resp: any) => {
                              // codigo para manipular la respuesta en caso necesario
                              return resp;
                            })
                          )
  }

  createCliente(cliente: any): Observable<any> {
    return this.httpClient.post(this.endpoint, cliente)
                          .pipe(
                            map((resp: any) => {
                              // codigo para manipular la respuesta en caso necesario
                              return resp;
                            })
                          )
  }

  updateCliente(_id: string, cliente: any): Observable<any> {
    return this.httpClient.put(`${this.endpoint}${_id}`, cliente)
                          .pipe(
                            map((resp: any) => {
                              // codigo para manipular la respuesta en caso necesario
                              return resp;
                            })
                          )
  }

  deleteCliente(_id: string): Observable<any> {
    return this.httpClient.delete(`${this.endpoint}${_id}`)
                          .pipe(
                            map((resp: any) => {
                              // codigo para manipular la respuesta en caso necesario
                              return resp;
                            })
                          )
  }



}
