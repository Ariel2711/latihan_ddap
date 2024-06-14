function klik() {
    alert('tessss')
}

function cetakNama() {
    var nama = document.getElementById("nama")
    alert(nama.value)
}

function createOrder() {
    coffee = document.forms[0].coffee
    txt = ""
    for (i = 0; i < coffee.length; ++i) {
        if (coffee[i].checked) {
            txt = txt + coffee[i].value + " "
        }
    }
    document.getElementById("order").value = "You order are coffee with " + txt
}

function pilKota() {
    var form = document.getElementById("formKota")
    var id_opsi = form.idkota.selectedIndex
    var kota = form.idkota.options[id_opsi].text
    alert('Kota ' + kota)
    form.kota.value = kota
}

var products = ["Javascript", "Kotlin", "Java", "PHP"]
products.push("Phyton")
document.write("<h3>Daftar Produk:</h3>")
document.write("<ol>")
products.forEach((data) => {
    document.write(`<li>${data}</li>`)
})
document.write("</ol>")

function appendToDisplay(value) {
    document.getElementById('display').value += value
}

function clearDisplay() {
    document.getElementById('display').value = ''
}

function calculate() {
    var displayValue = document.getElementById('display').value
    var result = eval(displayValue)
    document.getElementById('display').value = result
}
