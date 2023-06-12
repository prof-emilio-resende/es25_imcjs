// IMC = Peso / Altura²
function calculateImc(height, weight) {
    return weight / (height ** 2)
}

// O resultado deve ser expresso, conforme os valores abaixo:
// Magreza, quando o resultado é menor que 18,5 kg/m2;
// Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
// Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
// Obesidade, quando o resultado é maior que 30 kg/m2;
function translateImc(imc) {
    if (isNaN(imc)) return null;
    if (imc > 30) return "Obesidade";
    if (imc >= 24.9) return "Sobrepeso";
    if (imc >= 18.5) return "Normal";
    return "Magreza";
}

function getFieldsData() {
    var height = document.getElementById('altura').value;
    var weight = document.getElementById('peso').value;

    return {
        height: height,
        weight: weight
    };
}

function printResult(imc, description) {
    var imcDescription = imc + " " + description;
    document.getElementById("imc").innerHTML = imcDescription;
}

function calculate() {
    var values = getFieldsData();
    console.log(values['height'], values.weight);
    var imc = calculateImc(values['height'], values['weight']);
    var description = translateImc(imc);
    printResult(imc, description);
}
