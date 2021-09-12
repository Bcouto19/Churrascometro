let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('res')

function calcular(){
    console.log('Calculando...')

    let adultos =  inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qdtcarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let qdtcerveja = cervejaPP(duracao) * adultos 
    let qdtbebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)


    res.innerHTML = ` <p>${qdtcarne / 1000} kg de carne<p>`
    res.innerHTML +=  ` <p>${Math.ceil(qdtcerveja / 355)} latas  de ceveja<p>`
    res.innerHTML +=  ` <p>${Math.ceil(qdtbebidas / 2000)} litros de bebidas<p>`

    if (adultos == 0 || duracao == 0){
        window.alert('[ERRO] Verifique os dados')
    } 
    
} 
function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else{
        return 400
    } 
}  

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else{
        return 1200
    } 
} 

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else{
        return 1000
    } 
} 