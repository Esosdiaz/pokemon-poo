
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
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
		var pelea = document.getElementById("pelea")
		pelea.innerHTML = this.nombre + " atacó a " + pokemon.nombre + " y este ahora tiene " + pokemon.vida + " vida restante.";
	}
}

function pelear(){
	var pokemon1 = document.getElementById("pokemon1").value;
	var pokemon2 = document.getElementById("pokemon2").value;
	var numRandom = Math.floor((Math.random() * 100) + 1);
	var atacante = new Pokemon(pokemon1, "amarillo", numRandom);
	var atacado = new Pokemon(pokemon2, "rojo", numRandom);
	atacante.atacar(atacado); 

}

