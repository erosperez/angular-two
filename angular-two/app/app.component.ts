// Importar el n�cleo de Angular
import {Component} from 'angular2/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
	templateUrl: 'app/view/peliculas.html'
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
	public titulo:string;
	public pelicula:string;
	public anio:number;

	constructor(){
		this.titulo = "Peliculas con Angular 2"; 
		this.pelicula="Amores perros";
		this.anio =1987;
	}
}