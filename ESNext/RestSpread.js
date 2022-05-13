//operador ... rest(juntar)/spread(espalhar)
//usar rest como parâmetro de função
//usar spread como objeto
const funcionario = {nome:'Maria', salario: 25000}
const clone = {ativo: true, ...funcionario} //ele acrescentar o que tem em funcionario, fazendo uma cópia

//usar spread como array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)