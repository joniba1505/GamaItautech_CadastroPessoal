let botaoCadastrar = document.querySelector("#cadastrar");
botaoCadastrar.addEventListener("click", function(event) {
event.preventDefault();



//pegando as informações digitadas nos campos
let nome = document.querySelector("#nome").value;
let cpf = document.querySelector("#cpf").value;
let rg = document.querySelector("#rg").value;
let sexo = document.querySelector("#sexo").value;

let cep = document.querySelector("#cep").value;
let endereco = document.querySelector("#endereco").value;
let numero = document.querySelector("#numero").value;
let bairro = document.querySelector("#bairro").value;
let cidade = document.querySelector("#cidade").value;
let uf = document.querySelector("#uf").value;
let telFixo = document.querySelector("#tel-fixo").value;
let telCelular = document.querySelector("#tel-cel").value;

//validando os campos obrigatórios
if (nome == '') {
	document.querySelector("#nome").focus();
}
else if (cpf == '') {
	document.querySelector("#cpf").focus();
}
else if (endereco == '') {
	document.querySelector("#endereco").focus();
}
else if (numero == '') {
	document.querySelector("#numero").focus();
}
else if (telCelular == '') {
	document.querySelector("#tel-cel").focus();
}

else {


//desabilitando o botão de cadastro e habilitando o de limpar o formulário
document.querySelector("#cadastrar").disabled = true;
document.querySelector("#cadastroNovo").disabled = false

	//criando a tabela para exibir o resultado do cadastro
let cadTable = document.createElement("table");

//criando as ths para o cabeçalho da tabela
let nomeTh = document.createElement("th");
let cpfTh = document.createElement("th");
let rgTh = document.createElement("th");
let sexoTh = document.createElement("th");
let cepTh = document.createElement("th");
let enderecoTh = document.createElement("th");

let numeroTh = document.createElement("th");
let bairroTh = document.createElement("th");
let cidadeTh = document.createElement("th");
let ufTh = document.createElement("th");
let fixoTh = document.createElement("th");
let celularTh = document.createElement("th");

nomeTh.textContent = 'Nome';
cpfTh.textContent = 'CPF';
rgTh.textContent = 'RG';
sexoTh.textContent = 'Sexo';
cepTh.textContent = 'CEP';
enderecoTh.textContent = 'Rua';
numeroTh.textContent = 'Número';
bairroTh.textContent = 'Bairro';
cidadeTh.textContent = 'Cidade';
ufTh.textContent = 'UF';
fixoTh.textContent = 'Telefone Fixo';
celularTh.textContent = 'Telefone Celular';

//Adicionando as ths na tabela por meio da função appendChild
cadTable.appendChild(nomeTh);
cadTable.appendChild(cpfTh);
cadTable.appendChild(rgTh);
cadTable.appendChild(sexoTh);
cadTable.appendChild(cepTh);
cadTable.appendChild(enderecoTh);
cadTable.appendChild(numeroTh);
cadTable.appendChild(bairroTh);
cadTable.appendChild(cidadeTh);
cadTable.appendChild(ufTh);
cadTable.appendChild(fixoTh);
cadTable.appendChild(celularTh);

//criando a tr (linha da tabela)
let linhaTr = document.createElement("tr");

//criando os tds (as colunas que irão conter os dados digitados)
let nomeTd = document.createElement("td");
let cpfTd = document.createElement("td");
let rgTd = document.createElement("td");
let sexoTd = document.createElement("td");
let cepTd = document.createElement("td");
let enderecoTd = document.createElement("td");
let numeroTd = document.createElement("td");
let bairroTd = document.createElement("td");
let cidadeTd = document.createElement("td");
let ufTd = document.createElement("td");
let fixoTd = document.createElement("td");
let celularTd = document.createElement("td");

//adicionando os valores nas colunas

nomeTd.textContent = nome;
cpfTd.textContent = cpf;
rgTd.textContent = rg;
sexoTd.textContent = sexo;
cepTd.textContent = cep;
enderecoTd.textContent = endereco;
numeroTd.textContent = numero;
bairroTd.textContent = bairro;
cidadeTd.textContent = cidade;
ufTd.textContent = uf;
fixoTd.textContent = telFixo;
celularTd.textContent = telCelular;

//adicionando as colunas na linha, pela função appendChild
linhaTr.appendChild(nomeTd);
linhaTr.appendChild(cpfTd);
linhaTr.appendChild(rgTd);
linhaTr.appendChild(sexoTd);
linhaTr.appendChild(cepTd);
linhaTr.appendChild(enderecoTd);
linhaTr.appendChild(numeroTd);
linhaTr.appendChild(bairroTd);
linhaTr.appendChild(cidadeTd);
linhaTr.appendChild(ufTd);
linhaTr.appendChild(fixoTd);
linhaTr.appendChild(celularTd);

//adicionando a linha na tabela
cadTable.appendChild(linhaTr);

//trazendo a div para incluir nela a tabela
let divResult = document.querySelector(".resultado");
divResult.appendChild(cadTable);
}
});

//trazendo o botão relativo ao novo cadastro
let botaocadastroNovo = document.querySelector("#cadastroNovo");
//adicionando um ouvinte ao botão
botaocadastroNovo.addEventListener("click", function (event) {
event.preventDefault();
//recarregando a tela para zerar os campos e retirar a visualização da tabela
window.location.reload();
document.querySelector("#nome").focus();
});


