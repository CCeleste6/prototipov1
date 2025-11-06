// Estado global do aluno
let aluno = {
  nome: "Rodrigo",
  casaSugerida: null,
  casaEscolhida: null,
  ranque: 1,
  pm: 0,
  pc: 0,
  nota: 0
};

// Quiz
document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quiz-form");
  if (quizForm) {
    quizForm.addEventListener("submit", e => {
      e.preventDefault();
      const resposta = document.querySelector("input[name='q1']:checked");
      if (resposta) {
        aluno.casaSugerida = resposta.value;
        document.getElementById("resultado").textContent =
          "Casa sugerida: " + resposta.value;
      }
    });
  }
});

function confirmarCasa() {
  if (aluno.casaSugerida) {
    aluno.casaEscolhida = aluno.casaSugerida;
    alert("Casa confirmada: " + aluno.casaEscolhida);
  }
}

// Atividades
function corrigirAtividades() {
  let acertos = 0;
  if (parseInt(document.getElementById("resp1").value) === 56) acertos++;
  if (parseInt(document.getElementById("resp2").value) === 27) acertos++;

  aluno.pm += 10; // PM fixo por entrega
  aluno.nota = (acertos / 2) * 10;
  aluno.pc += aluno.pm; // PC aumenta com PM

  document.getElementById("resultado-atividades").textContent =
    `Você acertou ${acertos}/2 questões. Nota: ${aluno.nota}. PM ganho: 10. PC atual: ${aluno.pc}`;
}

// Vantagens (exemplo simples)
document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista-vantagens");
  if (lista) {
    const vantagens = [
      { nome: "Escudo da Disciplina I", ranque: 1 },
      { nome: "Juramento de Aço", ranque: 3 }
    ];
    vantagens.forEach(v => {
      if (v.ranque <= aluno.ranque) {
        const li = document.createElement("li");
        li.textContent = v.nome;
        lista.appendChild(li);
      }
    });
  }
});
