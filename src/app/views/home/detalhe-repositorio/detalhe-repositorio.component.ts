import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { PesquisarUsuarioComponent } from '../pesquisar-usuario/pesquisar-usuario.component';
import { GithubsService } from 'src/app/shared/service/githubs.service';
import { Branch } from 'src/app/shared/interface/tabela/branche.interface';
import { CommitRepositorioComponent } from '../commit-repositorio/commit-repositorio.component';

@Component({
  selector: 'app-detalhe-repositorio',
  templateUrl: './detalhe-repositorio.component.html',
  styleUrls: ['./detalhe-repositorio.component.css'],
})
export class DetalheRepositorioComponent implements OnInit {
  displayedColumns: string[] = ['name', 'action'];
  dataSource: any[];
  flag = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogoRef: MatDialogRef<PesquisarUsuarioComponent>,
    private service: GithubsService,
    public dialago: MatDialog
  ) {}

  ngOnInit(): void {
    this.getBranches();
  }
  getBranches(): void {
    this.service.getBranches(this.data.full_name).subscribe((branches) => {
      this.dataSource = branches;
      this.flag = true;
    });
  }
  sair(): void {
    this.dialogoRef.close();
  }
  resutadoBranch(name: string): void {
    this.service
      .getBranchesWithBranch(this.data.full_name, name)
      .subscribe((result) => {
        const dialogoRef = this.dialago.open(CommitRepositorioComponent, {
          data: {
            name: result.commit.commit.author.name,
            email: result.commit.commit.author.email,
            date: result.commit.commit.author.date,
            message: result.commit.commit.message,
          },
          minWidth: '500px',
        });

        dialogoRef.afterClosed().subscribe(() => {
          console.log('O dialogo está fechado!');
        });
      });
  }
}
