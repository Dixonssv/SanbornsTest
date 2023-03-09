import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientTestComponent } from './http-client-test/http-client-test.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { BuscadorEmpleadosService } from './services/buscador-empleados.service';
import { ListadoEmpleadosComponent } from './components/listado-empleados/listado-empleados.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  {path: 'inicio', component: ListadoEmpleadosComponent},
<<<<<<< HEAD
  {path: 'detalles/:index', component: DetallesComponent}
=======
  {path: 'detalles', component: DetallesComponent},
  { path: '',   redirectTo: '/inicio', pathMatch: 'full' }
>>>>>>> 8d90b8c738f25f2a444ac55f135d07e062992eb6
];

@NgModule({
  declarations: [
    AppComponent,
    HttpClientTestComponent,
    BuscadorComponent,
    ListadoEmpleadosComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)],
    FormsModule
  ],
  providers: [
    BuscadorEmpleadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }