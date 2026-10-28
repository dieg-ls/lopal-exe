// const WIFI = "pao123"


// let contador = 0 
// while (contador <= 2) {
//     let senha = prompt("Digite a senha: ")
//     if(WIFI === senha ){
//         alert('Conectado, Bom café!')
//         break
//     }else if(WIFI != senha){
//         alert("Senha incorreta, tente novamente")
//         contador = contador++
//         if(contador === 3){
//             alert("Muitas tentativas, voce foi bloqueado!")
//         }
//     }
// }


// let number = 10
// while (number > 0){
//     alert(number)
//     number--
// }
// alert("Feliz Ano Novo!")



let week = 1
let fullmoney = 0



while (fullmoney < 300) {
    alert(`Semana ${week}`)
    if (fullmoney >= 300) {
        alert(`Voce tem ${fullmoney} , voce ja pode comprar a bicicleta de 300 reais. Voce demorou ${semana} semanas`)
        
    }else if (fullmoney < 300){
        let money = Number(prompt("Digite quanto dinheiro voce ganhou essa semana: ")) 
        if(money <= 0){
            alert("Digite um valor valido!")
        }else {
            alert(`Dinheiro adicionado com sucesso. Agora voce tem: ${fullmoney + money}`)
            semana++
        }
    }
}