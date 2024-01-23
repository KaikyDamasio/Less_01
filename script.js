    function validar(){
    var campo1 = document.getElementById('campoA')
    var campo2 = document.getElementById('campoB')
    var campoA = Number(campo1.value)
    var campoB = Number(campo2.value)
    console.log(campoA)
    console.log(campoB)

    if(campoB>campoA){
        alert("Formulário Valido")
    }
    else{
        alert("Formulário Invalido ")
    }

    }