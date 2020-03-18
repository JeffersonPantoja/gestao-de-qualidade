import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Converter } from 'src/app/share/converter/converter';
import { Setor } from 'src/app/share/domain/setor';
import { Usuario } from 'src/app/share/domain/usuario';
import { Message } from 'src/app/share/enum/message.enum';
import { Perfil } from 'src/app/share/enum/perfil.enum';
import { Paginator } from 'src/app/share/interface/paginator.interface';
import { ToastService } from 'src/app/share/service/toast/toast.service';
import { AtividadeCadastroService } from './../atividade-cadastro/atividade-cadastro.service';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public perfis = [
    {label: 'Gestor', value: 'G'},
    {label: 'Colaborador', value: 'C'},
  ];

  public totalRecords: number;

  public usuarios: Usuario[];

  public toRegister: boolean;

  public toEdit: boolean;

  public usuarioForm: FormGroup;

  private pageEvent: {first: number};

  public setores: Setor[];

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private atividadeCadastroService: AtividadeCadastroService
  ) {
    this.usuarios = [];
    this.setores = [];
    this.totalRecords = 0;
    this.toRegister = false;
    this.toEdit = false;
  }

  ngOnInit(): void { }

  private createFormUsuario(usuario: Usuario): void {
    this.usuarioForm = this.formBuilder.group({
      id: [usuario.id],
      nome: [usuario.nome, Validators.required],
      email: [usuario.email, Validators.required],
      cpf: [usuario.cpf, Validators.required],
      setor: [usuario.setor, Validators.required],
      perfil: [usuario.perfil, Validators.required],
      ativo: [usuario.ativo]
    });
    this.getSetores();
  }

  private getSetores() {
    this.atividadeCadastroService.getSetores().subscribe((setores: Setor[]) => {
      this.setores = setores;
      if (this.usuarioForm.value.id !== null) {
        setores.forEach((setor: Setor) => {
          if (setor.id === this.usuarioForm.value.setor.id) {
            this.usuarioForm.controls.setor.setValue(setor);
          }
        });
      }
    });
  }

  public loadPage(event: {first: number}): void {
    this.usuarios = [];
    this.pageEvent = event;
    this.usuarioService.getUsuarios(event.first).subscribe((paginator: Paginator) => {
      this.totalRecords = paginator.totalRecords;
      this.usuarios = paginator.usuarios;
    });
  }

  public openRegister(): void {
    this.toRegister = true;
    this.toEdit = false;
    this.createFormUsuario(new Usuario());
  }

  public openEdit(usuario: Usuario): void {
    this.toEdit = true;
    this.toRegister = false;
    this.createFormUsuario(usuario);
  }

  public cancel(): void {
    this.toEdit = false;
    this.toRegister = false;
  }

  public save(): void {
    if (this.usuarioForm.valid) {
      if (this.toRegister) {
        this.usuarioService.register(this.usuarioForm.value).subscribe(() => {
          this.updatePage(Message.SAVE_SUCCESS);
        });
      } else if (this.toEdit) {
        this.usuarioService.edit(this.usuarioForm.value).subscribe(() => {
          this.updatePage(Message.SAVE_SUCCESS);
        });
      }
    }
  }

  public deactivate(usuario: Usuario): void {
    usuario.ativo = !usuario.ativo;
    this.usuarioService.edit(usuario).subscribe(() => {
      if (usuario.ativo) {
        this.toastService.showSuccess.next(Message.ACTIVATED_SUCCESS);
      } else {
        this.toastService.showSuccess.next(Message.DEACTIVATED_SUCCESS);
      }
    }, () => {
      usuario.ativo = !usuario.ativo;
    });
  }

  private updatePage(message: string): void {
    this.toastService.showSuccess.next(message);
    this.loadPage(this.pageEvent);
    this.cancel();
  }

  public getNamePerfil(perfil: Perfil): string {
    return Converter.getNamePerfil(perfil);
  }
}
