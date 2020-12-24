# Language: pt
Funcionalidade: autenticação

    Contexto:
       Dado que esteja na home
       E clique no item ao lado direito da barra de pesquisa
       E apareça uma caixa de diálogo

   Cenário: login normal
      Dado que escolha a opção "Entrar"
      Quando clicar no botão 
      Então uma página pedindo email e senha deve aparecer

   Cenário: login com facebook
      Dado que escolha a opção "Entrar com facebook"
      Quando clicar no botão
      Então uma nova janela no dominio do facebook deve ser mostrada
   
   Cenário: cadastro
      Dado que não tenha uma conta
      Quando clicar no link "Cadastrar"
      Então uma nova página pedindo informações pessoa deve ser mostrada