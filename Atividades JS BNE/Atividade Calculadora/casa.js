function Casa(){
    metros = document.getElementById('MquadradoCasa').value
    quartos = document.getElementById('QuartosCasa').value
    metro2 = document.getElementById('PrecoMquadrado').value
    let total

    if(metros == '' || quartos == '' || metro2 == ''){
        window.alert('Preencha todos os Campos e tente novamente!')
        return false
    }
    else{
    switch(quartos){
        case 1:
            default:
                total = metros*metro2
                window.alert('O resultado é ' + total)
                break;
                
        case 2:
            total = metros * (metro2*1.2)
            window.alert('O resultado é ' + total)
            break;

        case 3:
            total = metros * (metro*1.5)
            window.alert('O resultado é ' + total)
            break;

        case quartos > 3:
            total = metros * (metro * 2)
            window.alert('O resultado é ' + total)
            break;
    }
  }  
}
function Apartamento(){
    metros = document.getElementById('MquadradoAp').value
    quartos = document.getElementById('QuartosAp').value
    andar = document.getElementById('Andar').value
    metroquadrado = document.getElementById('PrecoMquadrado').value
    taxa = document.getElementById('Taxa').value
    taxa = taxa /100
    let total
    if(metros == '' || quartos == '' || andar == '' || metroquadrado == '' || taxa == ''){
        window.alert('Preencha todos os Campos e tente novamente!')
    }
    else{
        switch(quartos){
            case 1:
                default:
                    total = metros*(metro2*taxa)
                    window.alert('O resultado é ' + total)
                    break;
                    
            case 2:
                total = metros * (taxa*(metro2*1.2))
                window.alert('O resultado é ' + total)
                break;
    
            case 3:
                total = metros * (taxa*(metro*1.5))
                window.alert('O resultado é ' + total)
                break;
    
            case quartos > 3:
                total = metros * (taxa*(metro * 2))
                window.alert('O resultado é ' + total)
                
                break;
        }
    }
}
