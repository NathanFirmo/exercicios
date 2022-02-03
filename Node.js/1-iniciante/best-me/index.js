//process.stdout.write('Alguma coisa') É o que acontece no console log por debaixo dos panos

const questions = [
  "O que me deixou feliz hoje?",
  "Em que eu tive dificudade?",
  "Como posso melhorar?",
];

function ask(index = 0) {
  process.stdout.write("\n\n" + questions[index] + " -> ");
}

ask();

const answers = [];

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  console.log(`
    Que legal!

    ${answers[0]}
    A felicidade é uma coisa maravilhosa!

    ${answers[1]}
    Continue tentando, você vai conseguir!

    ${answers[2]}
    Entender nossos erros e buscar soluções é o caminho da evolução!
    `);
});
