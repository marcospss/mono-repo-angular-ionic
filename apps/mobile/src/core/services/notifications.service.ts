import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class NotificationsService {

  constructor(
    private toastCtrl: ToastController
  ) {}

  showToast(position: string, message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: position
    });

    toast.present(toast);
  }
}
