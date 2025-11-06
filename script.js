let aluno = {
  nome: "Rodrigo",
  casaSugerida: null,
  casaEscolhida: null,
  ranque: 1,
  pm: 0,
  pc: 0,
  nota: 0
};

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

function corrigirAtividades() {
  let acertos = 0;
  if (parseInt(document.getElementById("resp1").value) === 56) acertos++;
  if (parseInt(document.getElementById("resp2").value) === 27) acertos++;

  aluno.pm += 10; 
  aluno.nota = (acertos / 2) * 10;
  aluno.pc += aluno.pm;

  document.getElementById("resultado-atividades").textContent =
    `Você acertou ${acertos}/2 questões. Nota: ${aluno.nota}. PM ganho: 10. PC atual: ${aluno.pc}`;
}

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

function confirmarCasa() {
  if (aluno.casaSugerida) {
    aluno.casaEscolhida = aluno.casaSugerida;
    localStorage.setItem("casaEscolhida", aluno.casaEscolhida);
    alert("Casa confirmada: " + aluno.casaEscolhida);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const casaEscolhida = localStorage.getItem("casaEscolhida");
  if (casaEscolhida) {
    aluno.casaEscolhida = casaEscolhida;
    const span = document.getElementById("casa-escolhida");
    if (span) span.textContent = casaEscolhida;
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista-vantagens");
  if (lista) {
    
    if (!aluno.casaEscolhida) {
      lista.textContent = "Escolha sua casa primeiro no Quiz!";
      return;
    }

    
    const vantagensPorCasa = {
      guardioes: [
        { nome: "Escudo da Disciplina I", ranque: 1 },
        { nome: "Juramento de Aço", ranque: 3 }
      ],
      solidarios: [
        { nome: "Apoio Moral I", ranque: 1 },
        { nome: "Harmonia Plena", ranque: 3 }
      ]
      
    };

    const vantagens = vantagensPorCasa[aluno.casaEscolhida] || [];
    vantagens.forEach(v => {
      if (v.ranque <= aluno.ranque) {
        const li = document.createElement("li");
        li.textContent = v.nome;
        lista.appendChild(li);
      }
    });
  }
});
