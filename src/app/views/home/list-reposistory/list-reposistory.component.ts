import { Component, OnInit, ViewChild } from '@angular/core';
import { GithubsService } from 'src/app/shared/service/githubs.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PeriodicElement } from 'src/app/shared/interface/tabela/periodicelement.interface';
import { MatDialog } from '@angular/material/dialog';
import { DetalheRepositorioComponent } from '../detalhe-repositorio/detalhe-repositorio.component';
@Component({
  selector: 'app-list-reposistory',
  templateUrl: './list-reposistory.component.html',
  styleUrls: ['./list-reposistory.component.css'],
})
export class ListReposistoryComponent implements OnInit {
  flag = false;
  displayedColumns: string[] = ['name', 'action'];

  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public githubsService: GithubsService,
    public dialago: MatDialog
  ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getRepository();
  }

  getRepository(): void {
    GithubsService.user.subscribe((user) => {
      this.githubsService.getRepository(user).subscribe((result) => {
        this.dataSource.data = result;
      });
      this.flag = true;
    });
  }

  detalhe(data: any): void {
    const dialogoRef = this.dialago.open(DetalheRepositorioComponent, {
      data: {
        description: data.description,
        created_at: data.created_at,
        full_name: data.full_name,
        language: data.language,
        login: data.owner.login,
        updated_at: data.updated_at,
      },
      minWidth: '500px',
    });

    dialogoRef.afterClosed().subscribe(() => {
      console.log('O dialogo está fechado!');
    });
  }
}
