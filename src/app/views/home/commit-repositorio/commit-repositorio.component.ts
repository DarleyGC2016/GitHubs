import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-commit-repositorio',
  templateUrl: './commit-repositorio.component.html',
  styleUrls: ['./commit-repositorio.component.css'],
})
export class CommitRepositorioComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogoRef: MatDialogRef<CommitRepositorioComponent>
  ) {}

  ngOnInit(): void {}

  voltar(): void {
    this.dialogoRef.close();
  }
}
