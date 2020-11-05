import { Component } from '@angular/core';
import { from } from 'rxjs';
import {Tab1Service} from './tab1.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  contactos = []

  constructor(private tab1service: Tab1Service) {}

  ngOnInit(){
    this.contactos = this.tab1service.getContactos()
  }

}
