import { Component, OnInit, OnDestroy } from '@angular/core';

import { ToastService } from '../../service/toast/toast.service';
import {MessageService} from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  providers: [MessageService]
})
export class ToastComponent implements OnInit, OnDestroy {

  private toasts: Subscription[];

  constructor(
    private messageService: MessageService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.toasts = [];
    this.toasts.push(this.toastService.showSuccess.subscribe((message: string) => this.showSuccess(message)));
    this.toasts.push(this.toastService.showInfo.subscribe((message: string) => this.showInfo(message)));
    this.toasts.push(this.toastService.showWarn.subscribe((message: string) => this.showWarn(message)));
    this.toasts.push(this.toastService.showError.subscribe((message: string) => this.showError(message)));
  }

  ngOnDestroy(): void {
    this.toasts.map((toast: Subscription) => toast.unsubscribe());
  }

  private showSuccess(mensagem: string) {
    this.messageService.add({severity:'success', summary: 'Sucesso', detail: mensagem});
  }

  private showInfo(mensagem: string) {
      this.messageService.add({severity:'info', summary: 'Informativo', detail: mensagem});
  }

  private showWarn(mensagem: string) {
      this.messageService.add({severity:'warn', summary: 'Atenção', detail: mensagem});
  }

  private showError(mensagem: string) {
      this.messageService.add({severity:'error', summary: 'Erro', detail: mensagem});
  }

}
