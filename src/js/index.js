/*

Objetivo 1 - quando o usuario clicar no botao de selecao de plataforma deve abrir uma caixa com os botoes de selecao de plataformas.

  Passo 1 - pegar o botao de selecao de plataformas no Js para poder verificar quando o usuario clicar em cima dele.

  Passo 2 - pegar o elemento do conteudo que precisa ser mostrado.

  Passo 3 - Pegar o clique do usuario no Js.

  Passo 4 - Quando o usuario clicar, adicionar a classe ativo na listagem de plataforma dentro do botao para que o conteudo dele apareca.

Objetivo 2 - caso a lista de botoes de plataformas ja esteja aparecendo e o usuario clicar em cima do bota9o, o conteudo deve ser escondido.

  Passo 1 - verificar se o botao ja esta aberto, se sim, devemos remover a classe ativo para que ele esconda o conteudo novamente. 

*/

const botao = document.querySelector (".btn-plataforma");
const elementoPlataformas = document.querySelector (".btn-plataforma .plataformas");

botao.addEventListener ('click', () => {  
  elementoPlataformas.classList.toggle ("ativo");
});

































