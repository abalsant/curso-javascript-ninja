/*
Crie um array com 5 items (tipos variados).
*/
var arr =
[ 'Antonio',
  'mary',
  'Matheus',
  [Function: soma],
  { carro: 'Jeep' },
  10,
  5,
  3,
  { cor: 'Amarela' },
  [ 1, 2, 3 ],
  ]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(x){
... return arr.push(x);
... }

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([ 1, 'fim', null, true] ));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

  console.log('O segundo elemento do segundo array é '+arr[10][1]+'.'); //'O segundo elemento do segundo array é fim.'

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

  console.log('O primeiro array tem '+arr.length+' itens.')//O primeiro array tem 11 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
  
  > console.log('O segundo array tem '+arr[1].length+' itens.');//O segundo array tem 4 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var num = 0
undefined
> while(num<=20){
... var x = num%2;
... if(x===0 && num>=10){
..... console.log('Números pares de 10 a 20: '+ num +'.')}
... num++;
... }
/*
Números pares de 10 a 20: 10.
Números pares de 10 a 20: 12.
Números pares de 10 a 20: 14.
Números pares de 10 a 20: 16.
Números pares de 10 a 20: 18.
Números pares de 10 a 20: 20.
*/

/*

Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/

  > var num = 0;
undefined
> while(num<=20){
... var y = num%2;
... if(y===1 && num>=10){
..... console.log('Números ímpares de 10 a 20: '+ num +'.')}
... num++;
... }
/*
Números ímpares de 10 a 20: 11.
Números ímpares de 10 a 20: 13.
Números ímpares de 10 a 20: 15.
Números ímpares de 10 a 20: 17.
Números ímpares de 10 a 20: 19.
*/

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
 var i = 0
undefined
> for(var i=0; i<=120; i++){
... var x = i%2;
... if(x===0 && i>=100){
..... console.log('Números pares entre 100 e 120: '+ i++ +'.')}
... }
/*
Números pares entre 100 e 120: 100.
Números pares entre 100 e 120: 102.
Números pares entre 100 e 120: 104.
Números pares entre 100 e 120: 106.
Números pares entre 100 e 120: 108.
Números pares entre 100 e 120: 110.
Números pares entre 100 e 120: 112.
Números pares entre 100 e 120: 114.
Números pares entre 100 e 120: 116.
Números pares entre 100 e 120: 118.
Números pares entre 100 e 120: 120.

*/
  
  for(i=0; i<=125; i++){
... x = i%2;
... if(x===1 && i>=111){
..... console.log('Números ímpares entre 111 e 125: '+ i++ +'.')}
... }

/*
Números ímpares entre 111 e 125: 111.
Números ímpares entre 111 e 125: 113.
Números ímpares entre 111 e 125: 115.
Números ímpares entre 111 e 125: 117.
Números ímpares entre 111 e 125: 119.
Números ímpares entre 111 e 125: 121.
Números ímpares entre 111 e 125: 123.
Números ímpares entre 111 e 125: 125.
*/
