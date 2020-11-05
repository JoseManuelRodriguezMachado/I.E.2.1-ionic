import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {tab1} from './tab1.model';

@Injectable({
  providedIn: 'root'
})
export class Tab1Service {

  private contactos: tab1[] = [
    {
      id: '1',
      title: 'Han Solo',
      imagenURL: 'https://i2.wp.com/wipy.tv/wp-content/uploads/2020/03/verdadera-apariencia-de-han-solo-en-star-wars.jpg?fit=1000%2C600&ssl=1',
      comments: ['Cazarrecompensas']
    },
    {
      id: '2',
      title: 'Leia',
      imagenURL: 'https://cdn.cienradios.com/wp-content/uploads/sites/2/2019/10/54-2.gif',
      comments: ['Princesa']
    },
    {
      id: '3',
      title: 'Rey',
      imagenURL: 'https://static3.abc.es/media/play/2019/12/14/rey-kqvH--620x349@abc.jpg',
      comments: ['Recolectora']
    },
    {
      id: '4',
      title: 'Finn',
      imagenURL: 'https://img.ecartelera.com/noticias/fotos/58500/58521/1.jpg',
      comments: ['Piloto']
    }
  ]
  constructor() { }

  getContactos() {
    return [...this.contactos]
  }

  getContacto(contactoId: string){
    return{
      ...this.contactos.find(contacto => {
        return contacto.id === contactoId
      })
    }
  }

}
