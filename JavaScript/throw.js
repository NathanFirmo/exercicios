/*
THROW E TRY CATCH

Serve para podermos capturar erros em pontos do código e desviar o fluxo dessas partes com erro. Tudo isso sem parar a aplicação por completo.
*/

function sayMyname(name=''){
if (name=='')
{
    throw new Error('Nome é obrigatório');
}
console.log('depois do erro');
}

try {
    sayMyname();
} catch (error) {
    console.log(error);
}
console.log('após o try cacth');