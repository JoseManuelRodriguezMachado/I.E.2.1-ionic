import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController: AlertController) {}

  async alerta(){
    const al = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'myApp',
      message: 'Una pequeña muestra de mi conocimineto de ionic',
      buttons: ['OK']
    });

    await al.present();
    let result = await al.onDidDismiss();
    console.log(result);
  }
}
