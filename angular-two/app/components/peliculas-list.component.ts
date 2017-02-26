// Importar el n�cleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from '../model/pelicula';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-list',
	templateUrl: 'app/view/peliculas-list.html',
    styleUrls: ["app/assets/css/styles.css"]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class ListPeliculasComponent { 
    public pelicula:Pelicula;
	public peliculaElegida:Pelicula;
	public mostrarDatos:boolean;
	public peliculas:Array<Pelicula>;

	

	constructor(){
		this.mostrarDatos = false;
		this.peliculas= [new Pelicula(1, "Amores Perros", "Juan de la Fuente", 1987),
			new Pelicula(2, "La vida es bella", "", 1927),
			new Pelicula(3, "Intocables", "Lennon McDon", 1938),
			new Pelicula(4, "Imposible", "Edgar Mondo", null)
		];
		this.peliculaElegida= new Pelicula(1, "Amores Perros", "Juan de la Fuente", 1987);
		this.pelicula= this.peliculas[0];
        console.log(this.pelicula);
		
	}

	onShowHide(){
		this.mostrarDatos= !this.mostrarDatos;
	}

    debug(titulo = null){
        if(titulo != null){
            console.log(this.pelicula.titulo);
        } else {
            console.log(this.pelicula);
        }
    }
	onCambiarPelicula(pelicula = null){
		this.pelicula=pelicula;
		this.peliculaElegida = pelicula;
	}
}