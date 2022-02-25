import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent implements OnInit {

  clientes: Array<any> = [];
  formSearch: FormGroup = new FormGroup({});

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    // this.cargarClientes();
    this.formSearch = new FormGroup({
      search: new FormControl('')
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

}
