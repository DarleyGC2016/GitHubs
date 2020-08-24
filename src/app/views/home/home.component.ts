import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PesquisarUsuarioComponent } from './pesquisar-usuario/pesquisar-usuario.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public dialago: MatDialog) {}

  ngOnInit(): void {}
  searchUser(): void {
    const dialogoRef = this.dialago.open(PesquisarUsuarioComponent, {
      minWidth: '400px',
    });

    dialogoRef.afterClosed().subscribe(() => {
      console.log('O dialogo está fechado!');
    });
  }
}
