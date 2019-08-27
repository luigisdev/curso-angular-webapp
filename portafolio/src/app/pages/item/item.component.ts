import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      // También funciona de la siguiente manera como se muestra en el Video
      // pero la corrección del editor me gusta como quedó
      // console.log(parametros['id']);
      console.log(parametros.id);
    });
  }

}
