function productoria() {
    var m = parseInt(document.getElementById("m").value);
    var total = 1
    var r = Math.sqrt(12);
    for (let n = 1; n <= m; n++) {
        var x = ((Math.pow((2 * n), 2)) / (Math.pow((2 * n), 2) - 1))
        total = total * x
    }
    total = total * 2
    document.getElementById('resultado').innerHTML = total
}

function bmi() {
    var w = parseInt(document.getElementById("w").value);
    var ft = parseInt(document.getElementById("ft").value);
    var p = parseInt(document.getElementById("p").value);
    var h = p + (ft * 12)
    var BMI = 703 * (w / Math.pow((h), 2))
    if (BMI >= 25) {
        if (BMI >= 30) {
            var y = "obeso"
        } else {
            var y = "con exceso de peso"
        }

    } else if (BMI <= 18.5) {
        var y = "con bajo peso"

    } else {
        var y = "normal"
    }

    document.getElementById('resultadobmi').innerHTML = "su BMI es " + BMI + " lo que lo clasifica " + y

}
//productoria
/*El índice de masa corporal es una medida de la obesidad. En unidades estándar se calcula mediante la fórmula.
donde w es el peso en libras y h es la altura en pulgadas. la clasificación de la obesidad es.
escriba un programa en un archivo de script que calcule el IMC de una persona. el programa le pide a la persona que ingrese su peso y altura. el programa muestra el resultado en una oración que dice "su valor de bmi es xxx, lo que lo clasifica como sss", donde xxx es el valor de bmi redondeado a la décima más cercana y sss es la clasificación correspondiente. utilice el programa para determinar la obesidad de los siguientes dos individuos.
una persona de 6 pies 2 de altura con un peso de 180 lb
una persona de 5 pies 1 pulgada de alto con un peso de 150 lb*/