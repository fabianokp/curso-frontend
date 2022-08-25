# DOM
- Document Object Model
- Estrutura de um auquivo na web
- Representa documentos HTML ou XML
- Interface de progranação
- NÃO é uma linguagem de programação
- É essencial para o JS entender o modelo de página web

## Para que serve?
- Alterar a estrutura
- Alterar o estilo
- Alterar o conteúdo

## Como?
- Disponibilizando API (Aplication Programming Interface)
- Rotinas e padrões estabelecidos
- Métodos (funções)
- Árvore de elementos
- Seletores
- Objetos ( nós / nodes)

## Exemplo HTML
```
<html>
    <head></head>
    <body></body>
</html>
````

## Exemplo Obj
````
objeto = {
    html : {
        head : {},
        body : {
            h1 : {

            }
        }
    }
}
````

## DOM x JS 
- O DOM pode ser usado por outras linguagens
- Sem o DOM o JS não teria noção da página

### Vantagens de usar Javascript
- Código é executado por navegadores
- Tornar as páginas dinâmicas
- Evitar Requisições desnecessárias (performance)
- SPA ( Single Page Applications )
- Reagir rapidamente a ações dos usuários

### Desvantangens de usar o JavaScript
- Código é executado por navegadores
- O conteúdo NÃO fica visível para indexadores de busca
- Alterações em tempo de execução não ficam salvas no documento


### Exemplos 
Seleciona o objeto e disponibiliza (métodos / funções).callback

- document.getElementById(id)
- document.getElementsByTagName('div')
- document.createElement('div')
- parentNode.appendChild(node) // html.appendChild('body')
- element.innerHTML
- element.style
- element.setAttribute('name')
- element.getAttribute('name')
- element.addEventListener()
- window.location
- window.onload
- console.log()
- window.scrollTo(x, y)


## Seletores 
- Tipos de Seletores: Tag, ID, Class, Name, Query
- Callback
- getElementById()
- getElementByTagName()
- getElementByName()
- getElementByClassName()
- querySelectorAll() // #id | .class


## Formulários
- Precisamos evitar que o usuário passe dados incorretos
- Ou seja, para direcionar melhor o uso do nosso sistema
- Proteger a injeção de código malicioso
- Evitar erros de processamento
- Formatar dados para facilitar o processamento
- Rogex (expressões regulares)


### Referências
- DOM: https://dom.spec.whatwg.org
- Tecnologias JS: https://developer.mozilla.org/pt-BR/docs/Web/Javascript/JavaScript_technologies_overview
- Motores de execução: https://pt.wikipedia.org/wiki/Lista_de_motores_de_renderiza%C3%A7%C3%A3o
- Expressões Regulares: https://developer.mozilla.org/pt-BR/docs/Web/Javascript/Guide/Regular_Expressions
