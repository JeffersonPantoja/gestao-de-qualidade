import { Converter } from './../../../share/converter/converter';
import { Status } from './../../../share/enum/status.enum';
import { AtividadeService } from './atividade.service';
import { Atividade } from './../../../share/domain/atividade';
import { Component, OnInit } from '@angular/core';
import { Paginator } from 'src/app/share/interface/paginator.interface';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {

  public atividades: Atividade[];

  public pageEvent: {first: number};

  public totalRecords: number;

  public teste = false;

  constructor(private atividadeService: AtividadeService) {
    this.atividades = [];
    this.totalRecords = 0;
  }

  ngOnInit(): void {
  }

  public loadPage(event: {first: number}): void {
    this.atividades = [];
    this.pageEvent = event;
    this.atividadeService.getAtividades(event.first).subscribe((paginator: Paginator) => {
      this.totalRecords = paginator.totalRecords;
      this.atividades = paginator.atividades;
    });
  }

  public getNameStatus(status: Status): string {
    return Converter.getNameStatus(status);
  }

  public openRegister(): void {
    console.log('open');
  }

}