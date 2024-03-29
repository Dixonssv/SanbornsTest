import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPrintModule } from 'ngx-print';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { GridstackModule } from 'gridstack/dist/angular';

import { DetallesComponent } from './detalles/detalles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PdfDownloadBtnComponent } from './pdf-download-btn/pdf-download-btn.component';

import { CardComponent } from './cards/card/card.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DetallesComponent,
    DashboardComponent,
    SidebarComponent,
    PdfDownloadBtnComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    NgxPrintModule,
    GridstackModule,
  ],
  exports: [
    DetallesComponent,
    DashboardComponent,
    SidebarComponent,
    PdfDownloadBtnComponent,
    CardComponent,
  ]
})
export class ComponentsModule { }
