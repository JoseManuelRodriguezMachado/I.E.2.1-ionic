import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { from } from 'rxjs';
import {Tab1Service} from '../tab1.service';
import {tab1} from '../tab1.model';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  contactos: tab1;
  constructor(private activaterouter: ActivatedRoute, private Tab1Service: Tab1Service) { }

  ngOnInit() {
    this.activaterouter.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('contactoId')
      this.contactos = this.Tab1Service.getContacto(recipeId);
      console.log(this.contactos)
    })
  }

}
