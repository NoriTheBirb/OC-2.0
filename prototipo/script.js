function pesquisa() {
    var barra = document.getElementById('Ipesquisa')
    var a 
    var b
    
    document.getElementById('menuP').style.width = "62.6%"
    document.getElementById('menuP').style.height = "84%"
    document.getElementById('menuP').style.backgroundColor = 'white'
    document.getElementById('menuP').style.border = 'solid black'
    
    barra.addEventListener("focusout", (event) => {

        a = 1

    })
    
    barra.addEventListener("focusout", (event) => {

        if (barra.value.length == 0 && a == 1){

            document.getElementById('menuP').style.height = "0%"
            document.getElementById('menuP').style.backgroundColor = ''
            document.getElementById('menuP').style.border= ''
           
        }
        else {
            
        }
     

    })
    
    
}

function teste() {
    var barra = document.getElementById('Ipesquisa')

    window.alert(barra.value.length)

}
