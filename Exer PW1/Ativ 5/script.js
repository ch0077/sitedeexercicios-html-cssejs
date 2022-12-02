function pog() {
    var L = parseFloat(document.getElementById("L").value);
    var C = parseFloat(document.getElementById("C").value);

    var M = L * C;
    var P = M * 36;
    document.getElementById("preço").innerHTML = "R$" + P.toFixed(2);
}