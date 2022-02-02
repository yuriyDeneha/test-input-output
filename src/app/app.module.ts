import { RepositoryComponent } from './component/repositories/repository/repository.component';
import { RepositoriesComponent } from './component/repositories/repositories.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterByNamePipe } from './component/pipes/filter-by-name.pipe';
import { RepositoriesService } from './component/repositories.service';

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    RepositoryComponent,
    FilterByNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    RepositoriesService,
    FilterByNamePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
