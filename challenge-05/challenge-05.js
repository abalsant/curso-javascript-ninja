//challegem-05

/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
	var elogio = ['Antonio', 'curso', 'nota', 10];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
	function grato(x){
      return x;
  }
   

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

   grato(elogio)[1]; //'curso'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
   
  function parametro(x, y){
	return x[y];
 }
  
  

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

    var array_5_values = ['Antonio', 35, true, false, 100];
    

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
    parametro(array_5_values, 0); //'Antonio'
    parametro(array_5_values, 1); //35
    parametro(array_5_values, 2); //true
    parametro(array_5_values, 3); //false
    parametro(array_5_values, 4); //100


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
   function book(nomeDoLivro){
... var livros = {
..... 'livro1': { qtdePaginas: 258, autor: 'Antonio', editora: 'saraiva'},
..... 'livro2': { qtdePaginas: 488, autor: 'Mary', editora: 'Sipione'},
..... 'livro3': { qtdePaginas: 587, autor: 'Antonio', editora: 'Atica'},
..... };
... return !nomeDoLivro ? livros : livros[ nomeDoLivro ];
... }

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
  book(); /*{ livro1: { qtdePaginas: 258, autor: 'Antonio', editora: 'saraiva' },
  livro2: { qtdePaginas: 488, autor: 'Mary', editora: 'Sipione' },
  livro3: { qtdePaginas: 587, autor: 'Antonio', editora: 'Atica' } }*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
   var bookName = 'livro1';
   'O livro '+ bookName +' tem '+ book(bookName).qtdePaginas +' páginas!'
*/
	

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
	var bookName = 'livro1';
	'O autor do livro '+ bookName +' é '+ book(bookName).autor +'!'
	//
*/


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
	var bookName = 'livro1';
	'O livro '+ bookName +' foi publicado pela editora '+ book(bookName).editora +'.' 
	//'O livro livro1 foi publicado pela editora saraiva!'
*/
	
