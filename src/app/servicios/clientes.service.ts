import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})


export class ClientesService {

  endpoint = environment.apiUrl + 'clientes/';

  constructor(private httpClient: HttpClient) { }

  getClientes() {
    return this.httpClient.get(this.endpoint)
                          .pipe(
                            map((resp: any) => {
                              // codigo para manipular la respuesta en caso necesario
                              return resp;
                            })
                          )
  }

  searchClientes(term: string) {
    return this.httpClient.get(`${this.endpoint}search/${term}`)
                          .pipe(
                            map((resp: any) => {
                              // codigo para manipular la respuesta en caso necesario
                              return resp;
                            })
                          )
  }



}
