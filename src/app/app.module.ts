import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HomeComponent } from './views/home/home.component';
import { PesquisarUsuarioComponent } from './views/home/pesquisar-usuario/pesquisar-usuario.component';
import { ListReposistoryComponent } from './views/home/list-reposistory/list-reposistory.component';
import { DetalheRepositorioComponent } from './views/home/detalhe-repositorio/detalhe-repositorio.component';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';
import { CommitRepositorioComponent } from './views/home/commit-repositorio/commit-repositorio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PesquisarUsuarioComponent,
    ListReposistoryComponent,
    DetalheRepositorioComponent,
    LocalDateTimePipe,
    CommitRepositorioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
  providers: [LocalDateTimePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
