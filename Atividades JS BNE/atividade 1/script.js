const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

const getItensBd = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBd = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()

function loadItens(){
    itens = getItensBd()
    tbody.innerHTML = ''
    itens.array.forEach((item, index) => {
        insertItem(item, index)
    });
}
function insertItem(item, index){
    let tr = document.createElement('tr')

    tr.innerHTML = `
        <td>${item.nome}</td>
        <td>${item.funcao}</td>
        <td>${item.salario} </td>
        <td class = "acao">
            <button onclick = "edititem(${index})"><i class = "bx bx-edit"></i></button>
        </td>
        <td class = "acao"> 
            <button onclick = "deleteItem(${index})"><i class = "bx-trash"></i></button>
        </td>
    `
    tbody.appendChild(tr)
}
function editItem(index){
    openModal(true, index)
}
function deleteItem(index){
    itens.splice(index, 1)
    setItensBd()
    loadItens()
}
function openModal(edit = false, index = 0){
    modal.classList.add('active')

    modal.onclick = e => {
        if(e.target.className.indexOF('modal-container') !== -1){
            modal.classList.remove('active')
        }
    }
    if(edit){
        sNome.value = itens[index].nome
        sFuncao.value = itens[index].funcao
        sSalario.value = itens[index].salario
        id = index
    } else {
        sNome.value = ''
        sFuncao.value = ''
        sSalario.value = ''
    }
}
btnSalvar.onclick = e => {
    if(sNome.value =='' || sFuncao.value == '' || sSalario == '') {
        return
    }
    e.preventDeafult();

    if(id !== undefined) {
        itens[id].nome = sNome.value
        itens[id].funcao = sFuncao.value
        itens[id].salario = sSalario.value
    } else {
        itens.push({'nome': sNome.value, 'funcao': sFuncao.value, 'salario' : sSalario.value})
    }
    setItensBd()

    modal.classList.remove('active')
    loadItens()
    id = undefined
}