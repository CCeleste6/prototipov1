async function carregarCasa(nome) {
  const resposta = await fetch(`data/${nome}.json`);
  const dados = await resposta.json();


  const lista = document.getElementById(`vantagens-${nome}`);
  dados.tiers[0].ranques[0].vantagens.forEach(v => {
    const li = document.createElement("li");
    li.textContent = `${v.nome} → ${v.efeito}`;
    lista.appendChild(li);
  });
}


["guardioes", "visionarios", "precursores", "solidarios"].forEach(carregarCasa);
