// Importar el n�cleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from './model/pelicula';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
	templateUrl: 'app/view/peliculas.html',
	styleUrls: ["app/assets/css/styles.css"]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
	public titulo:string = "Mis peliculas Angular";
	public pelicula:Pelicula;
	public mostrarDatos:boolean;

	

	constructor(){
		this.pelicula = new Pelicula(1, "Amores Perros", "Juan de la Fuente", 1987);
		this.mostrarDatos = false;
		this.debug();
	}

	debug(){
		console.log(this.pelicula);
	}

	onShowHide(){
		this.mostrarDatos= !this.mostrarDatos;
	}
}