import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Subscription } from 'rxjs';

import { NormaIframeService } from './norma-iframe.service';

@Component({
  selector: 'app-norma-iframe',
  templateUrl: './norma-iframe.component.html',
  styleUrls: ['./norma-iframe.component.css']
})
export class NormaIframeComponent implements OnInit, OnDestroy {

  private urlLisneter: Subscription;

  public urlPdf: SafeResourceUrl;

  constructor(
    private domSanitizer: DomSanitizer,
    private normaIframeService: NormaIframeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.urlLisneter = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const idNorma = parseInt(paramMap.get('idNorma'), 10);
      this.normaIframeService.getNorma(idNorma).subscribe((blob: Blob) => {
        this.urlPdf = this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
      });
    });
  }

  ngOnDestroy(): void {
    this.urlLisneter.unsubscribe();
  }


}
