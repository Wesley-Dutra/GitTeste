# Language: pt
Funcionalidade: adicionar computador à sacola

   Cenário: adicionar item
      Dado que tenha pesquisado "computador" na home
      E carregado uma nova página com vários itens
      E escolhido o primeiro
      Quando carregar a página do item escolhido
      E clicar em "Adicionar à sacola"
      Então a página da sacola com o item escolhido deve ser mostrada