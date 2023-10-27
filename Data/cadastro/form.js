
//Inicio da função verify
function verify() {

    //MUITAS declarações de variáveis
    var nome = document.getElementById('idNome')
    var n
    var idade = document.getElementById('idIdade')
    var i
    var email = document.getElementById('idEmail')
    var e 
    var ender = document.getElementById('idEndereco')
    var en
    var outros = document.getElementById('idOut')
    var out
    var interesses = document.getElementById('idInter')
    var inter
    var sentimentos = document.getElementById('idSen')
    var sen
    var valores = document.getElementById('idVal')
    var val
    var w = window.innerWidth
    var ver


    //Verifica se otodos os campos não estão vazios
    if (nome.value.length == 0) {
        document.getElementById("idNome").style.borderColor = "red";
        document.getElementById("idNome").style.borderRadius = "10px"
        n = 1
    }
    else {
        document.getElementById("idNome").style.borderColor = "#c9c9c9";
        document.getElementById("idNome").style.borderRadius = "0px"
        n = 0
    }
    

    if (idade.value.length == 0) {
        document.getElementById("idIdade").style.borderColor = "red";
        document.getElementById("idIdade").style.borderRadius = "10px"
        i = 1
    }
    else {
        document.getElementById("idIdade").style.borderColor = "#c9c9c9";
        document.getElementById("idIdade").style.borderRadius = "0px"
        i = 0
    }
    
    
    if (email.value.length == 0) {
        document.getElementById("idEmail").style.borderColor = "red";
        document.getElementById("idEmail").style.borderRadius = "10px"
        e = 1
    }
    else {
        document.getElementById("idEmail").style.borderColor = "#c9c9c9";
        document.getElementById("idEmail").style.borderRadius = "0px"
        e = 0
    }


    if (ender.value.length == 0) {
        document.getElementById("idEndereco").style.borderColor = "red";
        document.getElementById("idEndereco").style.borderRadius = "10px"
        en = 1
    }
    else {
        document.getElementById("idEndereco").style.borderColor = "#c9c9c9";
        document.getElementById("idEndereco").style.borderRadius = "0px"
        en = 0
    }
    

    if (outros.value.length == 0) {
        document.getElementById("idOut").style.borderColor = "red";
        document.getElementById("idOut").style.borderRadius = "10px"
        out = 1
    }
    else {
        document.getElementById("idOut").style.borderColor = "#c9c9c9";
        document.getElementById("idOut").style.borderRadius = "0px"
        out = 0
    }


    if (interesses.value.length == 0) {
        document.getElementById("idInter").style.borderColor = "red";
        document.getElementById("idInter").style.borderRadius = "10px"
        inter = 1
    }
    else {
        document.getElementById("idInter").style.borderColor = "#c9c9c9";
        document.getElementById("idInter").style.borderRadius = "0px"
        inter = 0
    }
    

    if (sentimentos.value.length == 0) {
        document.getElementById("idSen").style.borderColor = "red";
        document.getElementById("idSen").style.borderRadius = "10px"
        sen = 1
    }
    else {
        document.getElementById("idSen").style.borderColor = "#c9c9c9";
        document.getElementById("idSen").style.borderRadius = "0px"
        sen = 0
    }


    if (valores.value.length == 0) {
        document.getElementById("idVal").style.borderColor = "red";
        document.getElementById("idVal").style.borderRadius = "10px"
        val = 1
    }
    else {
        document.getElementById("idVal").style.borderColor = "#c9c9c9";
        document.getElementById("idVal").style.borderRadius = "0px"
        val = 0
    }
     

    if (n == 0 && i == 0 && e == 0 && en == 0 && out == 0 && inter == 0 && sen == 0 && val == 0) {
        ver = 0
    }
    else {
        ver = 1
    }

    
    if (ver == 0 && w > 992) {
        location.href = "../home/PChome.html"
    }
    else if (ver == 0 && w < 992) {
        location.href = "../home/CLhome.html"
    }
    
}