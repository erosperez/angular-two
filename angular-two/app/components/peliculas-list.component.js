System.register(['angular2/core', '../model/pelicula'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pelicula_1;
    var ListPeliculasComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            // Decorador component, indicamos en que etiqueta se va a cargar la plantilla
            ListPeliculasComponent = (function () {
                function ListPeliculasComponent() {
                    this.mostrarDatos = false;
                    this.peliculas = [new pelicula_1.Pelicula(1, "Amores Perros", "Juan de la Fuente", 1987),
                        new pelicula_1.Pelicula(2, "La vida es bella", "", 1927),
                        new pelicula_1.Pelicula(3, "Intocables", "Lennon McDon", 1938),
                        new pelicula_1.Pelicula(4, "Imposible", "Edgar Mondo", null)
                    ];
                    this.peliculaElegida = new pelicula_1.Pelicula(1, "Amores Perros", "Juan de la Fuente", 1987);
                    this.pelicula = this.peliculas[0];
                    console.log(this.pelicula);
                }
                ListPeliculasComponent.prototype.onShowHide = function () {
                    this.mostrarDatos = !this.mostrarDatos;
                };
                ListPeliculasComponent.prototype.debug = function (titulo) {
                    if (titulo === void 0) { titulo = null; }
                    if (titulo != null) {
                        console.log(this.pelicula.titulo);
                    }
                    else {
                        console.log(this.pelicula);
                    }
                };
                ListPeliculasComponent.prototype.onCambiarPelicula = function (pelicula) {
                    if (pelicula === void 0) { pelicula = null; }
                    this.pelicula = pelicula;
                    this.peliculaElegida = pelicula;
                };
                ListPeliculasComponent = __decorate([
                    core_1.Component({
                        selector: 'peliculas-list',
                        templateUrl: 'app/view/peliculas-list.html',
                        styleUrls: ["app/assets/css/styles.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListPeliculasComponent);
                return ListPeliculasComponent;
            }());
            exports_1("ListPeliculasComponent", ListPeliculasComponent);
        }
    }
});
//# sourceMappingURL=peliculas-list.component.js.map