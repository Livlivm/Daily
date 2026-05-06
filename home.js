async function carregar() {
  try {
    const res = await fetch("http://localhost:3000/tarefas/listar");
    const tarefas = await res.json();

    const container = document.getElementById("cards");
    container.innerHTML = "";

    tarefas.forEach(t => {
      container.innerHTML += `
        <div class="card">
          <div class="card-content">
            <h3>${t.nome}</h3>
            <p>${t.descricao}</p>
            <small>
              ${new Date(t.dataInicio).toLocaleDateString()} -
              ${new Date(t.dataFim).toLocaleDateString()}
            </small>
          </div>
        </div>
      `;
    });

  } catch (erro) {
    console.error("Erro ao carregar tarefas:", erro);
  }
}

carregar();