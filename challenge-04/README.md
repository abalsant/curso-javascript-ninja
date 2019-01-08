# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy;
if( '0' ) { isTruthy = true;} else { isTruthy = false;} // true
  

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
if('') { isTruthy = true;} else { isTruthy = false;}
if(-0) { isTruthy = true;} else { isTruthy = false;}
if(0) { isTruthy = true;} else { isTruthy = false;}
if(NaN) { isTruthy = true;} else { isTruthy = false;}
if(undefined) { isTruthy = true;} else { isTruthy = false;}
if(null) { isTruthy = true;} else { isTruthy = false;}
if("") { isTruthy = true;} else { isTruthy = false;}
if(false) { isTruthy = true;} else { isTruthy = false;}

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
if("2") { isTruthy = true;} else { isTruthy = false;}
if(true) { isTruthy = true;} else { isTruthy = false;}
if(12) { isTruthy = true;} else { isTruthy = false;}
if(null) { isTruthy = true;} else { isTruthy = false;}
if('antonio') { isTruthy = true;} else { isTruthy = false;}
if('12') { isTruthy = true;} else { isTruthy = false;}
if({}) { isTruthy = true;} else { isTruthy = false;}
if([]) { isTruthy = true;} else { isTruthy = false;}
if(!!1) { isTruthy = true;} else { isTruthy = false;}
if(!0) { isTruthy = true;} else { isTruthy = false;}
/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {marca: 'ford', modelo: 'ka', placa: 'LKJ-2122', ANO: 2018, cor: 'amarela', 
quantasPortas: 4, assentos: 5, quantidadePessoas: 0}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
mudarCor = function(cor){
    carro.cor = cor;}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
obterCor = function(){
    return carro.cor;}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
obterModelo = function(){
    return carro.modelo;}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
obterMarca = function(){
return carro.marca;}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
obterMarcaModelo = function(){
... return 'Esse carro é um '+ carro.marca +' '+ carro.modelo  +'.'}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

adicionarPessoasNoCarro = function(numeroPessoas){
  
  var assentosLivres = carro.assentos > carro.quantidadePessoas ? carro.assentos - carro.quantidadePessoas : ''; 
   var pessoas = (carro.quantidadePessoas >1 || carro.quantidadePessoas !=0)? 's' : '';
   
   if((numeroPessoas + carro.quantidadePessoas)<=5){
    carro.quantidadePessoas += numeroPessoas;
   }
    
       
    else if(carro.quantidadePessoas==5){
      return 'O carro já está lotado!' 
      }
    
    else if((assentosLivres>0) || (carro.numerosPessoas>carro.assentos)){
      return 'Só cabem mais '+ assentosLivres +' pessoa'+pessoas+'!'; 
      }
      
     return 'Já temos '+ carro.quantidadePessoas +' pessoa'+pessoas+' no carro!';
    }





/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
obterCor();//"amarela"

// Mude a cor do carro para vermelho.
mudarCor();//('vermelho');

// E agora, qual a cor do carro?
obterCor();//"vermelho"

// Mude a cor do carro para verde musgo.
mudarCor('verde musgo');

// E agora, qual a cor do carro?
obterCor();//"verde musgo"

// Qual a marca e modelo do carro?
obterMarca();//"ford"

// Adicione 2 pessoas no carro.
adicionarPessoasNoCarro(2);//"Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.
adicionarPessoasNoCarro(4)//"Só cabem mais 3 pessoas!"

// Faça o carro encher.
adicionarPessoasNoCarro(3);//"Já temos 5 pessoas no carro!"

// Tire 4 pessoas do carro.
retirarPessoasCarro = function(numDeRetirada){
    return carro.quantidadePessoas =carro.quantidadePessoas-numDeRetirada;}
    
    retirarPessoasCarro(4);//1

// Adicione 10 pessoas no carro.
adicionarPessoasNoCarro(10); //"Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?
carro.quantidadePessoas(); //1
```
