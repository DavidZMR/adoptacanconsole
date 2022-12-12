import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes-adopcion',
  templateUrl: './solicitudes-adopcion.component.html',
  styleUrls: ['./solicitudes-adopcion.component.css']
})
export class SolicitudesAdopcionComponent implements OnInit {

  cards = [
    {
      img:'../../../assets/images/perroCorral.jfif',
      nombrePerro: 'Juancho',
      nombreUsuario:'Paco perez',
      fecha: '03/12/2022'
    },
    {
      img:'../../../assets/images/perroCorral2.jpg',
      nombrePerro: 'Manolo',
      nombreUsuario:'Oscar Rodriguez',
      fecha: '03/12/2022'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
