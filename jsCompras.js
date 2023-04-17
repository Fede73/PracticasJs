var art1 = prompt ("Hola que compraste en la verdulería?");
var art2 = prompt ("y que otra cosa?");
/*alert(art1+" "+art2)*/
var costo1 = parseInt( prompt("Cuanto te costo las "+art1));
var costo2 = parseInt( prompt("Cuanto te costo las "+art2));
var efectivo = prompt("con cuanto pagaste (billete)");
var total = costo1+costo2;
var resto = efectivo-total;

alert("el total de tu compra es: "+total +" y tu vuelto es: "+resto );
if (efectivo>total) {alert("comprate caramelos con el vuelto")} else {alert("no te alcanzó el dinero")};
