import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: 'inicio', component: EmpleadoCardListComponent},
  {path: 'inicio',          loadChildren: () =>import('./modules/inicio/inicio.module').then((m) => m.InicioModule)},
  {path: 'detalles/:index', loadChildren: () =>import(`./detalles/detalles.module`).then((m) => m.DetallesModule),},
  //{path: 'detalles', component: DetallesComponent},
  //{path: 'orgchart', component: OrganigramaComponent},
  //{path: 'testDashboard', component: TestDashboardComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
