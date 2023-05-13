import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

  
  
  mostrar(e: any){
    const gif = document.getElementById(e)?.classList.add('imagen-grande');
    const div = document.getElementById(e)?.classList.add('contenedor-imagen');
    
  }

  get resultados(){
    return this.GifsService.resultados;
  }

  constructor(private GifsService: GifsService){}
}
