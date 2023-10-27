function pages() {
    meuStorage = localStorage
    var w = window.innerWidth
    var email = document.getElementById('inpE')
    var senha = document.getElementById("inpS")
    var key
    var regKey
    var regex = /@.*\./
    var user 
    var usernames 
    var perm

    

    // Verifica se os campos estão preenchidos e emite um alerta caso não estejam, mudando dependendo do campo vazio 

  if (email.value.length == 0 && senha.value.length == 0) {
        document.getElementById("idEmail").style.borderColor = "red"
        document.getElementById("idEmail").style.borderRadius = "40px"
    
        document.getElementById("idSenha").style.borderColor = "red"
        document.getElementById("idSenha").style.borderRadius = "40px"    
    }

    else if (email.value.length > 0 && senha.value.length == 0) {
        document.getElementById("idEmail").style.borderColor = "black"
        document.getElementById("idEmail").style.borderRadius = "10px"
        document.getElementById("idSenha").style.borderColor = "red"
        document.getElementById("idSenha").style.borderRadius = "40px"
    }

    else if (email.value.length == 0) {
        document.getElementById("idEmail").style.borderColor = "red"
        document.getElementById("idEmail").style.borderRadius = "40px"
    }

    else if (senha.value.length == 0) {
        document.getElementById("idSenha").style.borderColor = "red"
        document.getElementById("idSenha").style.borderRadius = "40px"
    }

    else {
        document.getElementById("idEmail").style.borderColor = "black"
        document.getElementById("idSenha").style.borderColor = "black"
        document.getElementById("idEmail").style.borderRadius = "10px"
        document.getElementById("idSenha").style.borderRadius = "10px"
        key = 0
    }

    // Verifica se o email é valido, e se for, retorna V = 0 

     if (regex.test(email.value) && key == 0) {
        regKey = 0
        document.getElementById("idEmail").style.borderColor = "black";
    }

    else if (key == 0) {
        document.getElementById("idEmail").style.borderColor = "red";
        document.getElementById("idEmail").style.borderRadius = "40px"
    }


    //Verificação manual de usuários
    var perm

   if (email.value == 'tagzero09@gmail.com' && senha.value == 3523) {
        perm = 0
        usernames = "Nori"
    }
    else if (email.value == 'lucianohenrique@gmail.com' && senha.value == 2509) {
        perm = 0
        usernames = "Luciano"
    }
    else if (email.value == 'stephanie_132@gmail.com' && senha.value == 4002) {
        perm = 0
        usernames = "Stephanie"
    }
    else {
        perm = 1
        document.getElementById("idSenha").style.borderColor = "red";
        document.getElementById("idSenha").style.borderRadius = "40px"
    }

    
    

    
    // Se todas as verificações anteriores retornarem 0, redireciona para o site com base no dispositivo que o usuario esta utilizando 
   

    if (key == 0 && regKey == 0 && perm == 0 && w > 992) {
        perm = 0
        location.href = "Data/home/PChome.html"
    }
    else if (key == 0 && regKey == 0 && perm == 0 && w < 992) {
        perm = 0
        location.href = "data/home/CLhome.html"
    }

    //Registra o email e o nome do usuario na local storage para usos em outras paginas

    localStorage.setItem("email", email.value)
    localStorage.setItem("username", usernames)
    localStorage.setItem("perm", perm)
    
}   

function permReset() {
    perm = 1
    localStorage.setItem("perm", perm)
}

function regis() {
    location.href = "Data/cadastrar/cadastro.html"
}

function teste() {
    perm = localStorage.getItem("perm")
    window.alert(perm)
}