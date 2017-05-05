
function Pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre
	this.color = color
	this.nivelDeAmistad = 0
	this.vida = 100
	this.poderDeAtaque = poderDeAtaque
	this.mostrarPokemon = function(){
		document.getElementById("parrafo").innerHTML += ("Hola, soy " + this.nombre + " y soy de color " + this.color + "<br>");
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
		var pelea = document.getElementById("pelea")
		pelea.innerHTML = this.nombre + " atacó a " + pokemon.nombre + " y este ahora tiene " + pokemon.vida + " vida restante. <br><br>";
	}
}

function pelear(){
	var pokemon1 = document.getElementById("pokemon1").value;
	var pokemon2 = document.getElementById("pokemon2").value;
	var numRandom = Math.floor((Math.random() * 100) + 1);
	var atacante = new Pokemon(pokemon1, "amarillo", numRandom);
	var atacado = new Pokemon(pokemon2, "rojo", numRandom);
	if (atacante.nombre == atacado.nombre){
		alert("sean amiguitos!")
	} else {
	atacante.atacar(atacado); 
	}
}

const Pikachu = new Pokemon("Pikachu", "amarillo", 100)
Pikachu.mostrarPokemon();
const Charmander = new Pokemon("Charmander", "naranjo", 100)
Charmander.mostrarPokemon();
const Squirtle = new Pokemon("Squirtle", "celeste", 100)
Squirtle.mostrarPokemon();
const Bulbasaur = new Pokemon("Bulbasaur", "verde", 100)
Bulbasaur.mostrarPokemon();
