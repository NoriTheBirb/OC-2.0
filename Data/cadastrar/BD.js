function cadastro() {

    //-----------------------------------------------------------------------------------------


    //Variáveis para confirmação que os campos estão preenchidos 
    var u
    var e
    var s


    //Variavel de verificação e variável de confirmação de verificação
    var regex = /@.*\./
    var regKey = 1

    //Declaração de variaveis locais que serão salvas em um banco de dados no futuro
    var usernome = document.getElementById("inpU")
    var email = document.getElementById("inpE")
    var senha = document.getElementById("inpS")

    localStorage.setItem("username", usernome.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("senha", senha.value)

    
    //Verifica se os campos estão preenchidos
    if (email.value.length == 0) {
        document.getElementById("idEmail").style.borderColor = "red"
        document.getElementById("idEmail").style.borderRadius = "40px"
        
    }
    else {
        document.getElementById("idEmail").style.borderColor = "black"
        document.getElementById("idEmail").style.borderRadius = "10px"
        e = 0
    }

    if (usernome.value.length == 0) {
        document.getElementById("idUser").style.borderColor = "red"
        document.getElementById("idUser").style.borderRadius = "40px"
    }
    else {
        document.getElementById("idUser").style.borderColor = "black"
        document.getElementById("idUser").style.borderRadius = "10px"
        u = 0
    }

    if (senha.value.length == 0 || senha.value.length < 4) {
        document.getElementById("idSenha").style.borderColor = "red"
        document.getElementById("idSenha").style.borderRadius = "40px"
    }
    else {
        document.getElementById("idSenha").style.borderColor = "black"
        document.getElementById("idSenha").style.borderRadius = "10px"
        s = 0

    }

    //Verifica se o email é valido
    if (regex.test(email.value)) {
        regKey = 0
        document.getElementById("idEmail").style.borderColor = "black";
    }

    else{
        document.getElementById("idEmail").style.borderColor = "red";
        document.getElementById("idEmail").style.borderRadius = "40px"
    }

    //Redirecionamento para a home, após a conclusão do cadastro e declaração e uso da var perm
    var perm 
    localStorage.setItem("perm", perm)

    if (regKey == 0 && u == 0 && e == 0 && s == 0) {
        location.href = "../home/PChome.html"
        perm = 0
    }   

   //-----------------------------------------------------------------------------------------
}


//função do botão de voltar
function back() {
    location.href = "../../login.html"  
}