function Person(height, weight) {
    if (isNaN(height) || isNaN(weight))
        throw Error("Invalid height or weight");

    this.height = height;
    this.weight = weight;
}

function Dietician(height, weight) {
    Person.call(this, height, weight);
    this.calculateImc = function() {
        this.imc = this.weight / (this.height ** 2);
    }

    // O resultado deve ser expresso, conforme os valores abaixo:
    // Magreza, quando o resultado é menor que 18,5 kg/m2;
    // Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
    // Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
    // Obesidade, quando o resultado é maior que 30 kg/m2;
    this.translateImc = function() {
        if (isNaN(this.imc)) return null;
        if (this.imc > 30) return "Obesidade";
        if (this.imc >= 24.9) return "Sobrepeso";
        if (this.imc >= 18.5) return "Normal";
        return "Magreza";
    }
}

Dietician.prototype = Object.create(Person.prototype);
Dietician.prototype.constructor = Dietician;


function getFieldsData(heightEl, weightEl) {
    var height = parseFloat(heightEl.value);
    var weight = parseFloat(weightEl.value);
    var d = new Dietician(height, weight);

    return d;
}

function printResult(imc, description) {
    var imcDescription = imc + " " + description;
    document.getElementById("imc").innerHTML = imcDescription;
}

function buildCalculate() {
    var heightEl = document.getElementById('altura');
    var weightEl = document.getElementById('peso');

    return function() {
        var dietician = getFieldsData(heightEl, weightEl);
        dietician.calculateImc();
        var description = dietician.translateImc();
        printResult(dietician.imc, description);
    }
}


window.onload = function() {
    var el = document.querySelector(".data .form .actions button.action");
    el.addEventListener('click', function(){ console.log('antes') });
    el.addEventListener('click', buildCalculate());
    el.addEventListener('click', function(){ console.log('depois') });
}
