# Language: pt
Funcionalidade: abrir a página de um produto

   Cenário: abrir o primeiro item do departamento
      Dado que esteja na home
      Quando clicar no primeiro item do departamento
      Então a página escolhida deve ser carregada

    Cenário: abrir o primeiro produto do departamento escolhido
       Dado que a página do departamento já esteja carregada
       E apareça os produtos na tela
       Quando escolher o primeiro da lista
       E clicar nele
       Então deve ser mostrado as informações do produto
       Mas sem abrir uma nova página