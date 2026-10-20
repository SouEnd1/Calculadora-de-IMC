function calcularImc() {

//Entrada de dados
let pesocliente = document.getElementById("peso").value;
let alturacliente = document.getElementById("altura").value;


//Processamento de dados

let valorimc = pesocliente / (alturacliente * alturacliente);




//Saída de dados
document.getElementById("resultado").textContent = "Seu IMC é: " + valorimc.toFixed(2);

//classificação do IMC



document.getElementById("classdoimc").textContent = "Classificação do IMC: " ;
if (valorimc < 18.5) {
    document.getElementById("classdoimc").textContent += "Abaixo do peso";
} else if (valorimc >= 18.5 && valorimc < 24.9) {
    document.getElementById("classdoimc").textContent += "Peso normal";
} else if (valorimc >= 25 && valorimc < 29.9) {
    document.getElementById("classdoimc").textContent += "Sobrepeso";
} else if (valorimc >= 30 && valorimc < 34.9) {
    document.getElementById("classdoimc").textContent += "Obesidade grau I";
} else if (valorimc >= 35 && valorimc < 39.9) {
    document.getElementById("classdoimc").textContent += "Obesidade grau II";
} else {
    document.getElementById("classdoimc").textContent += "Obesidade grau III";
}


}



