function Calcular(tamanho,quartos){
    let metro2 = 3000
    let Total 

    quartos = window.prompt('Informe o numero de quartos:')
    switch (quartos) {
        case 1:
            default:
                tamanho = parseFloat(window.prompt('Insira a metragem:'))
                total  = tamanho * metro2
                console.log('o preço é ' + total)
                break;

        case 2:
            tamanho = parseFloat(window.prompt('insira a metragem:'))
            total = tamanho * (metro2*1.2)
            console.log('o preço é ' + total)
            break;

        case 3:
            tamanho = parseFloat(widow.prompt('Insira a metragem:'))
            total = tamanho * (metro2 * 1.5)
            console.log('o preço é ' + total)
            break;
        
        case quartos > 3:
            tamanho = parseFloat(window.prompt('Insira a metragem:'))
            total = tamanho * (metro2 * 2)
            console.log('o preço é ' + total)
            break;
    }
    return total
}
console.log(Calcular())