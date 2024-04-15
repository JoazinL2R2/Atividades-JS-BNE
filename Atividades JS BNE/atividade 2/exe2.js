window.alert("Este site realizará um formulário de login!");

class Dados {
  constructor(nomeCadastro, idadeCadastro, profissaoCadastro, telefoneCadastro, enderecoCadastro, cidadeCadastro) {
    this.nomeCadastro = nomeCadastro;
    this.idadeCadastro = idadeCadastro;
    this.profissaoCadastro = profissaoCadastro;
    this.telefoneCadastro = telefoneCadastro;
    this.enderecoCadastro = enderecoCadastro;
    this.cidadeCadastro = cidadeCadastro;
  }
}
function DadosCliente(){

    let nome = window.prompt('Informe o nome:');
    let idade = window.prompt('Informe a idade:');
    let profissao = window.prompt('Informe a profissão:');
    let telefone = window.prompt('Informe o telefone:');
    let endereco = window.prompt('Informe o endereço:');
    let cidade = window.prompt('Informe a cidade:');
    let candidato = new Dados(nome, idade, profissao, telefone, endereco, cidade);


    document.write('<h1>Formulario de Login</h1>')
    document.write('<fieldset>')
    document.write("Nome: " + candidato.nomeCadastro + "<br>"+ "<br>");
    document.write("Idade: " + candidato.idadeCadastro + "<br>"+ "<br>");
    document.write("Profissão: " + candidato.profissaoCadastro + "<br>"+ "<br>");
    document.write("Telefone: " + candidato.telefoneCadastro + "<br>"+ "<br>");
    document.write("Endereço: " + candidato.enderecoCadastro + "<br>"+ "<br>");
    document.write("Cidade: " + candidato.cidadeCadastro + "<br>"+ "<br>");
}
DadosCliente()

