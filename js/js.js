
//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var limit = 5;
//NAVE
var y = 0; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocitat = null;
var altitut = null;
var fuel = null;
var request = new XMLHttpRequest();

request.addEventListener("load", function(evt){
    console.log(evt);
}, false);

request.open('GET', 'index.html', true),
request.send();

//al cargar por completo la página...
window.onload = function(){
	
    velocitat = document.getElementById("velocitat");
    altitut = document.getElementById("altitut");
    fuel = document.getElementById("fuel");
 






//dificultat

if
(document.getElementsByClassName("m212")[0].style.display);
{confirm("has guanyat")};
    
    



 //Pause
    document.getElementsByClassName("lm")[0].onclick = function () {
        stop();
        document.onkeydown = null;
        document.onkeyup = null;
        document.getElementsByClassName("lm")[0].style.display = "none";
        document.getElementsByClassName("lm3")[0].style.display = "block";
    };
    document.getElementsByClassName("lm3")[0].onclick = function () {
        start();
        document.onkeydown = motorOn;
        document.onkeyup = motorOff;
        document.getElementsByClassName("lm3")[0].style.display = "none";
        document.getElementsByClassName("lm")[0].style.display = "block";
        
    };
	//definición de eventos
	//mostrar menú móvil
    document.getElementsByClassName("show")[0].onclick = function () {
        document.getElementById("menu").style.display = "block";
        document.getElementsByClassName("hide")[0].style.display = "block";
        document.getElementsByClassName("show")[0].style.display = "none";
		stop();
		document.onkeydown = null;
		document.onkeyup = null;
	}
	//ocultar menú móvil
    document.getElementsByClassName("hide")[0].onclick = function () {
        document.getElementById("menu").style.display = "none";
        document.getElementsByClassName("show")[0].style.display = "block";
        document.getElementsByClassName("hide")[0].style.display = "none";
		document.onkeydown = motorOn;
		document.onkeyup = motorOff;
		start();
	}
	
    //encender/apagar al apretar/soltar una tecla

    document.onkeydown = motorOn;
    document.onkeyup = motorOff;
	
	//Empezar a mover la nave justo después de cargar la página
    start();
   
    
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}


function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	//actualizar marcadores
    velocitat.innerHTML = Math.abs(
v.toFixed(2));
    altitut.innerHTML = (-y + 60.22).toFixed(0) ;
	
	//mover hasta que top sea un 60% de la pantalla
	if (y<60){ 
		document.getElementById("nau").style.top = y+"%"; 
	} else { 
        stop(); aterratge();
	}
}
function aterratge() {
    if (v <= limit) {
        setTimeout(funci, 500);
        function funci() {
            confirm("Enhorabona, bon aterratge! Vols tornar a jugar?");
            document.onkeydown = null;
            document.onkeyup = null;
            if (r == true) {
                location.reload();
            }
        }
    }
    else {
        document.onkeydown = null;
        document.onkeyup = null;
        document.getElementById("nav").src = "img/boom.gif"
        setTimeout(func, 2000);
        function func() {
           var r = confirm("Has perdut, vols tornar a intentar-ho?");
            document.onkeydown = null;
            document.onkeyup = null;
            if (r == true) {
                location.reload();
            }
            else
                ;
        }

    }
}
function motorOn(){
	//el motor da aceleración a la nave
	a=-g;
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
        timerFuel = setInterval(function () { actualizarFuel(); }, 10);	
    document.getElementById("nav").src = "img/nau13.png"
}
function motorOff(){
	a=g;
	clearInterval(timerFuel);
    timerFuel = null;
    document.getElementById("nav").src = "img/nau122.png"
}
function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=0.1;
	if (c < 0 ) c = 0;
    fuel.innerHTML = c.toFixed(0);	
}
function finaljoc() {
    motorOff();
    document.onkeydown = null;
    document.onkeyup = null;
}
