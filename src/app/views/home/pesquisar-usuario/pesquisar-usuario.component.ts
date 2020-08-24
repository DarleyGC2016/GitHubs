import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GithubsService } from 'src/app/shared/service/githubs.service';
@Component({
  selector: 'app-pesquisar-usuario',
  templateUrl: './pesquisar-usuario.component.html',
  styleUrls: ['./pesquisar-usuario.component.css'],
})
export class PesquisarUsuarioComponent implements OnInit {
  public userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogoRef: MatDialogRef<PesquisarUsuarioComponent>,
    private service: GithubsService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      user: ['', [Validators.required]],
    });
  }
  pesquisarUsuario(): void {
    this.service.addUser(this.userForm.value.user);
    this.cancel();
  }
  cancel(): void {
    this.dialogoRef.close();
    this.userForm.reset();
  }
}
