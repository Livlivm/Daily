function salvar(event) {
  event.preventDefault();

  const tarefa = {
    nome: document.getElementById("nome").value,
    descricao: document.getElementById("descricao").value,

    
    dataInicio: new Date(document.getElementById("inicio").value).toISOString(),
    dataFim: new Date(document.getElementById("fim").value).toISOString()
  };

  fetch("http://localhost:3000/tarefas/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tarefa)
  })
  .then(res => {
    if (!res.ok) throw new Error("Erro");
    return res.json();
  })
  .then(() => {
    alert("Tarefa cadastrada!");

    document.getElementById("nome").value = "";
    document.getElementById("inicio").value = "";
    document.getElementById("fim").value = "";
    document.getElementById("descricao").value = "";
  })
  .catch(err => {
    console.error(err);
    alert("Erro ao cadastrar");
  });
}