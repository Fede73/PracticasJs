window.onload = iniciar();
console.log("arranca")
var intentos = [];
var precio ;
function iniciar(){
    var boton = document.getElementById ("probar");
    boton.addEventListener("click", functionPrueba);
}
//const fill = (number, len) =>
// "0".repeat(len - number.length) + number;
function functionPrueba (){
    var ingresaPrecio=document.getElementById ("ingresaPrecio");
    precio = ingresaPrecio.value;
    var arriesgaNumero = document.getElementById ("arriesgaNumero");
    var arriesga = arriesgaNumero.value;
    intentos.push (arriesga);
    var afirmacion;

    
  // if(precio.length>arriesga.length){ 
  //  var resto=precio.length;
  //  arriesga=fill( arriesga, resto );

 //  }
    if (arriesga == precio) {/*alert("Bingo!!!");*/ bingo(), playPause()} else{
        if (arriesga < precio) {masCaro()};
    if (arriesga>precio) {masBarato()};
    //mostrarResultados();//
} 
}


/*function mostrarResultados (){

    var resultadosMal = document.getElementById ("resultadosMal");
    var html ="";

    for (var arriesga of intentos){
        html += arriesga + " segui probando  " +"<br/>";
    }
    resultadosMal.innerHTML = html;
}*/
function bingo(){
    var bingo = document.getElementById("resultadoBien");
    bingo.innerHTML = "Bingo!!!"
    
}
function masCaro(){
    var masCaro = document.getElementById("resultadosMal");
    masCaro.innerHTML = "es mas caro"
}
function masBarato(){
    var masBarato = document.getElementById("resultadosMal");
    masBarato.innerHTML = "es mas barato"
}
/*function playAudio(){
    document.getElementById("audio").play();
}*/


var audio =document.getElementById ("audio");
var suena =document.getElementById ("playPauseBtn");
suena.addEventListener("click", playPause)
var count=0
   
function playPause (){
if (count==0){count=1
    audio.play()
   /* playPauseBtn.innerHTML="Pause &#9208"  */
} else{
    count=0;
    audio.pause();
    /*playPauseBtn.innerHTML="Play &#9208"*/

}
}
