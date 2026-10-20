function calcularImc() {
    let pesocliente = parseFloat(document.getElementById("peso").value);
    let alturacliente = parseFloat(document.getElementById("altura").value);

    // Verifica se os valores são válidos
    if (isNaN(pesocliente) || isNaN(alturacliente) ||
        pesocliente <= 0 || alturacliente <= 0) {
        document.getElementById("resultado").textContent =
            "Digite um peso e uma altura válidos.";
        document.getElementById("classdoimc").textContent = "";
        return;
    }

    let valorimc = pesocliente / (alturacliente * alturacliente);

    document.getElementById("resultado").textContent =
        "Seu IMC é: " + valorimc.toFixed(2);

    document.getElementById("classdoimc").textContent =
        "Classificação do IMC: ";

    if (valorimc < 18.5) {
        document.getElementById("classdoimc").textContent += "Abaixo do peso";
    } else if (valorimc < 25) {
        document.getElementById("classdoimc").textContent += "Peso normal";
    } else if (valorimc < 30) {
        document.getElementById("classdoimc").textContent += "Sobrepeso";
    } else if (valorimc < 35) {
        document.getElementById("classdoimc").textContent += "Obesidade grau I";
    } else if (valorimc < 40) {
        document.getElementById("classdoimc").textContent += "Obesidade grau II";
    } else {
        document.getElementById("classdoimc").textContent += "Obesidade grau III";
    }
}
