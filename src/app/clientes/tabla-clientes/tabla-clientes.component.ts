import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent implements OnInit {

  clientes: Array<any> = [];
  formSearch: FormGroup = new FormGroup({});
  loading: boolean = false;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    // this.cargarClientes();
    this.formSearch = new FormGroup({
      search: new FormControl('')
    })
    this.searchClientes();
  }

  searchClientes() {
    this.formSearch.get('search')?.valueChanges
                                  .pipe(
                                    debounceTime(300),
                                    distinctUntilChanged()
                                  )
                                 .subscribe(term => {
                                   if(term.length === 0) {
                                     this.clientes = [];
                                   } else {
                                     this.loading = true;
                                     this.clientesService.searchClientes(term)
                                                         .subscribe({
                                                           next: (resp: any) => {
                                                             this.loading = false;
                                                             this.clientes = resp.clientes;
                                                            },
                                                           error: (error: any) => {console.log(error)}
                                                         })
                                   }
                                 })
  }

  cargarClientes(): void{
    this.clientesService.getClientes()
                        // .subscribe((resp: any) => { // Versión habitual que será próximamente "deprecada"
                        //   this.clientes = resp.clientes;
                        // }, (error: any) => {
                        //   console.log(error)
                        // })
                        .subscribe({ // Nueva implementación de subscribe() en HttpClient
                          next: (resp: any) => {this.clientes = resp.clientes},
                          error: (error: any) => {console.log(error)}
                        })
  }

  eliminarCliente(_id: string): void { // Ojo que no tiene modal de confirmación porque no tenemos tiempo :)
    this.clientesService.deleteCliente(_id)
                        .subscribe({ 
                          next: (resp: any) => {
                            this.clientes = [];
                            this.formSearch.get('search')?.patchValue('');
                          },
                          error: (error: any) => {console.log(error)}
                        })
  }

}
