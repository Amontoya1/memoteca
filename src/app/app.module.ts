import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CrearPensamientoComponent } from './componentes/pensamientos/crear-pensamiento/crear-pensamiento.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamientoComponent } from './componentes/pensamientos/listar-pensamiento/listar-pensamiento.component';
import { PensamientoComponent } from './componentes/pensamientos/pensamiento/pensamiento.component';
import { HttpClientModule } from '@angular/common/http';
import { DeletePensamientoComponent } from './componentes/pensamientos/delete-pensamiento/delete-pensamiento.component';
import { EditPensamientoComponent } from './componentes/pensamientos/edit-pensamiento/edit-pensamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CrearPensamientoComponent,
    ListarPensamientoComponent,
    PensamientoComponent,
    DeletePensamientoComponent,
    EditPensamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
