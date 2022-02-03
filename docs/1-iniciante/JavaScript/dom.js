/*
MANIPULANDO ATRIBUTOS

setAttribute -> serve para setar atributo
getAttribute -> serve para pegar um atributo
removeAttribute -> serve para remover atributo

MANIPULANDO ESTILOS

(background-color -> backgroundColor)
element.style.backgroundColor

classList
lista de métodos -> add, remove, toggle(é semelhante a um interruptor)

NAVEGANDO PELOS ELEMENTOS

**** Pais
parentElement & parentNode

**** Filhos
childNodes
children (trás um HTML colection)
    (first e last)
    - firstChild -> trás o primeiro elemento, incluindo texto vazio
    - firstElementChild -> trás o primeiro elemento, excluindo texto vazio
**** Irmãos
nextSibling & previousSibling
considera texto vazio

nextElementSibling & previousElementSibling

ADICIONANDO ELEMENTOS
append
adiciona um elemento depois do último filho

prepend
adiciona o elemento antes do primeiro filho

insertBefore
body.insertBefore('div', 'script') -> inserir uma div antes do script

EVENTOS
Nós adicionamos eventos no HTML ou JavaScript e os eventos iniciam com a palavra 'on' 

.addEventListener('nome-do-evento', function) -> é a melhor prática, pois se colocar o '.on', ele considerará só o último. No EventListener o JavaScript considerará todos.

Vamos usar também o objeto 'event', que tem muitas propriedades e protótipos para usarmos.
*/
