import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes-de-perreras',
  templateUrl: './solicitudes-de-perreras.component.html',
  styleUrls: ['./solicitudes-de-perreras.component.css']
})
export class SolicitudesDePerrerasComponent implements OnInit {
  cards = [
    {
      img:"../../../assets/images/la pared.jfif",
      nombre:"Perrera la pared",
      direccion:"privada morelos",
      fecha:"03/12/22"
    },
    {
      img:"../../../assets/images/perrera el refugio.jfif",
      nombre:"Perrera El refugio",
      direccion:"uruguay #22",
      fecha:"03/12/22"
    },
    {
      img:"../../../assets/images/PERRERA_MUNICIPAL_MATAMOROS.jpg",
      nombre:"Perrera municipal",
      direccion:"colon #312",
      fecha:"03/12/22"
    },
    {
      img:"",
      nombre:"Perrera dulce hogar",
      direccion:"Panamericana #444",
      fecha:"03/12/22"
    },
    {
      img:"",
      nombre:"Perrera municipal",
      direccion:"Benito juarez #333",
      fecha:"03/12/22"
    },
    

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
