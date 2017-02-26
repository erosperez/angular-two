// Importar el n�cleo de Angular
import {Component} from 'angular2/core';
import {ListPeliculasComponent} from './components/peliculas-list.component'
import {PeliculasFooterComponent} from './components/peliculas-footer.component'
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
	templateUrl: 'app/view/peliculas.html',
	directives: [ListPeliculasComponent, PeliculasFooterComponent],
	styleUrls: ["app/assets/css/styles.css"]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
	public titulo:string = "Mis peliculas Angular";

}