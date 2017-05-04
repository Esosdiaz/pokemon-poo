
function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre
	this.color = color
	this.nivelDeAmistad = 0
	this.vida = 100
	this.poderDeAtaque = poderDeAtaque
	this.mostrarPokemon = function(){
		document.getElementById("parrafo").innerHTML += ("hola, soy " + this.nombre + " y soy de color " + this.color + "<br>");
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
	}
}

const Pikachu = new Pokemon ("Pikachu", "amarillo", 100);
Pikachu.mostrarPokemon();
const Charmander = new Pokemon ("Charmander", "rojo", 20);
Charmander.mostrarPokemon();
const Squartle = new Pokemon ("Squartle", "celeste", 40);
Squartle.mostrarPokemon();
const Bulbasour = new Pokemon ("Bulbasour", "verde", 120);
Bulbasour.mostrarPokemon();

Pikachu.atacar(Charmander);
console.log(Charmander.vida);

