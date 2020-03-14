import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Norma } from 'src/app/share/domain/norma';
import { Paginator } from 'src/app/share/interface/paginator.interface';
import { CatalogoNormasService } from './catalogo-normas.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-catalago-normas',
  templateUrl: './catalago-normas.component.html',
  styleUrls: ['./catalago-normas.component.css']
})
export class CatalagoNormasComponent implements OnInit {

  public normas: Norma[];

  public pageEvent: {first: number};

  public totalRecords: number;

  constructor(
    private catalagoNormasService: CatalogoNormasService,
    private router: Router
  ) {
    this.normas = [];
    this.totalRecords = 0;
  }

  ngOnInit(): void {
  }

  public loadPage(event: {first: number}): void {
    this.normas = [];
    this.pageEvent = event;
    this.catalagoNormasService.getNormas(event.first).subscribe((paginator: Paginator) => {
      this.totalRecords = paginator.totalRecords;
      this.normas = paginator.normas;
    });
  }

  public getNorma(idNorma: number): void {
    this.router.navigate([`/interno/norma-iframe/${idNorma}`]);
  }

}
