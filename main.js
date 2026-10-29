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






// let week = 1
// let fullmoney = 0
// while (fullmoney < 300) {
    
//     alert(`Semana ${week}`)
//         let money = Number(prompt("Digite quanto dinheiro voce ganhou essa semana: ")) 
//         if(money <= 0){
//             alert("Digite um valor valido!")
//         }else {
//             alert(`Dinheiro adicionado com sucesso. Agora voce tem: ${fullmoney + money}`)
            
//             fullmoney = fullmoney + money
//             if (fullmoney >= 300) {
//                 alert(`Voce tem ${fullmoney} reais, voce ja pode comprar a bicicleta que custa 300 reais. Voce demorou ${week} semanas`)
//             }else{
//                 week++
//             }
//         }
// }






let attempt = 1
let num = Number(prompt("Digite um numero entre 1 e 50: "))
    while (num != 25) {
        let num = Number(prompt("Digite um numero entre 1 e 50: "))
        if (num === 25) {
            alert(`Parabens, voce acertou na ${attempt} tentativ`)
        } else if (num > 50 || num < 1) {
            alert("Voce digitou um numero invalido, digite um numero entre 1 e 50")
        } else if(num > 25){
            alert("menos")
            attempt++
        } else if(num < 25){
            alert("mais")
            attemmpt++

        }
    }

