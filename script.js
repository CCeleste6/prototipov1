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
  aluno.casaEscolhida = localStorage.getItem("casaEscolhida") || null;
  aluno.pm = parseInt(localStorage.getItem("pm")) || 0;
  aluno.pc = parseInt(localStorage.getItem("pc")) || 0;
  aluno.nota = parseFloat(localStorage.getItem("nota")) || 0;
  aluno.ranque = parseInt(localStorage.getItem("ranque")) || 1;

  if (document.getElementById("casa-escolhida"))
    document.getElementById("casa-escolhida").textContent = aluno.casaEscolhida || "?";
  if (document.getElementById("pm"))
    document.getElementById("pm").textContent = aluno.pm;
  if (document.getElementById("pc"))
    document.getElementById("pc").textContent = aluno.pc;
  if (document.getElementById("nota"))
    document.getElementById("nota").textContent = aluno.nota;
  if (document.getElementById("ranque"))
    document.getElementById("ranque").textContent = aluno.ranque;
});

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
    localStorage.setItem("casaEscolhida", aluno.casaEscolhida);
    alert("Casa confirmada: " + aluno.casaEscolhida);
  }
}

function corrigirAtividades() {
  let acertos = 0;
  if (parseInt(document.getElementById("resp1").value) === 56) acertos++;
  if (parseInt(document.getElementById("resp2").value) === 27) acertos++;

  aluno.pm += 10; //
  aluno.nota = (acertos / 2) * 10;
  aluno.pc += aluno.pm; // 

  localStorage.setItem("pm", aluno.pm);
  localStorage.setItem("pc", aluno.pc);
  localStorage.setItem("nota", aluno.nota);

  alert(`Você acertou ${acertos}/2 questões.\nNota: ${aluno.nota}\nPM ganho: 10\nPC atual: ${aluno.pc}`);

  window.location.href = "index.html";
}

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
      ],
      visionarios: [
        { nome: "Ideia Brilhante I", ranque: 1 },
        { nome: "Horizonte Infinito", ranque: 3 }
      ],
      precursores: [
        { nome: "Primeiro Passo I", ranque: 1 },
        { nome: "Rumo ao Futuro", ranque: 3 }
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
