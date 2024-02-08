function calcular_tabuada(){
    var form_num = document.getElementById('form_num')
    var num = Number(form_num.value)
    var seletor = document.getElementById('seletor')
    var option = document.querySelector('#option')
    seletor.innerHTML = ''

    if(num.length == 0){
        alert('ERRO')
    }
    else{
        for(var cont = 1; cont < 11; cont ++){
            var option2 = document.createElement('option')
            option2.innerHTML += `${num} x ${cont} = ${num * cont}`
            option2.setAttribute('id', `option${cont}`)
            seletor.append(option2)
        }
    }
}