import { Component, OnInit } from '@angular/core';
import { Setor } from 'src/app/share/domain/setor';
import { SetorService } from './setor.service';
import { Paginator } from 'src/app/share/interface/paginator.interface';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {

  public totalRecords;

  public setores: Setor[];

  constructor(
    private setorService: SetorService
  ) { }

  ngOnInit(): void {
  }

  public loadPage(event: {first: number}): void {
    const page = (event.first / 10) + 1
    this.setorService.getSetores(page).subscribe((paginator: Paginator) => {
      this.totalRecords = paginator.totalRecords;
      this.setores = paginator.setores;
    });
  }

}
