import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  _id: string = '';
  formCliente: FormGroup = new FormGroup({});
  
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.formCliente = new FormGroup({
      nombre: new FormControl(''),
      actividades: new FormControl(''),
      direccion: new FormControl(''),
      localidad: new FormControl(''),
    })
    this._id = this.activatedRoute.snapshot.params['_id'];
    this.clientesService.getClienteById(this._id)
                        .subscribe({
                          next: (resp: any) => {
                            this.formCliente.get('nombre')?.patchValue(resp.cliente.nombre);
                            this.formCliente.get('actividades')?.patchValue(resp.cliente.actividades);
                            this.formCliente.get('direccion')?.patchValue(resp.cliente.direccion);
                            this.formCliente.get('localidad')?.patchValue(resp.cliente.localidad);
                          },
                          error: (error: any) => {console.log(error)}
                        })
  }

  actualizarCliente() {
    // Posibles transformaciones del objeto a añadir al body
    this.clientesService.updateCliente(this._id, this.formCliente.value)
                        .subscribe({
                          next: (resp: any) => {
                            this.router.navigate(['/']);
                          },
                          error: (error: any) => {console.log(error)}
                        })
  }

}
