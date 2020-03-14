import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NormaIframeService } from './norma-iframe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-norma-iframe',
  templateUrl: './norma-iframe.component.html',
  styleUrls: ['./norma-iframe.component.css']
})
export class NormaIframeComponent implements OnInit, OnDestroy {

  private urlLisneter: Subscription;

  public urlPdf;

  constructor(
    private domSanitizer: DomSanitizer,
    private normaIframeService: NormaIframeService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.urlLisneter = this.router.paramMap.subscribe((paramMap: ParamMap) => {
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
