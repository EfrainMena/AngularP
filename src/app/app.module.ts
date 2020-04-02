import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './curso.component';
import { CursosCliComponent } from './cursos-cli/cursos-cli.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursosCliComponent,
    PropiedadesComponent,
    ClassBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
