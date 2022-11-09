var btnGenerar = document.getElementById("btnGenerar");
var btnCalcular = document.getElementById("btnCalcular");

function generar() {
	document.getElementById("edad").value = Math.floor(Math.random() * (99 - 18) + 18);
	document.getElementById("altura").value = (Math.random() * (2.5 - 1.5) + 1.5).toFixed(2);
	document.getElementById("peso").value = (Math.random() * (130 - 20) + 20).toFixed(2);
}

btnGenerar.addEventListener("click", generar);
btnCalcular.addEventListener("click", calcular);
