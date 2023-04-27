import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EmpleadoModel } from 'src/app/modules/shared/models/empleado.model';
import { SearchService } from 'src/app/modules/shared/services/search/search.service';
import { EmpleadoService } from 'src/app/modules/shared/services/empleado/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado-card-list',
  templateUrl: './empleado-card-list.component.html',
  styleUrls: ['./empleado-card-list.component.css'],
  encapsulation: ViewEncapsulation.None, // Aplicar estilos a innerHTML
})
export class EmpleadoCardListComponent implements AfterViewInit{
  
  empleados: Array<EmpleadoModel>;
  public searching : boolean;

  constructor(
    private router: Router,
    public searchService:SearchService,
    public empleadoService:EmpleadoService,
    ) {
      this.searching = false;

      this.empleados = [];
  }

  ngAfterViewInit(): void {

    this.searchService.searchStarted.subscribe(() => {
      // Searching...
      console.log("Buscando...");
      this.searching = true;
    });

    this.searchService.searchCompleted.subscribe(() => {
      // SearchCompleted
      console.log("Busqueda terminada!...");
      this.searching = false;
      this.empleados = this.searchService.empleados;
      console.log(this.searchService.empleados);
    });
  }

  viewDetails(index: number) {
    this.router.navigate(["detalles/" + index]);
  }

}
