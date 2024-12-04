document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript está funcionando!");
    
    const form = document.getElementById("cadastroForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      adicionarItem();
    });
  });
  
  const listas = {
    frutas: document.getElementById("listafrutas"),
    limpeza: document.getElementById("listalimpeza"),
    carnes: document.getElementById("listadecarnes"),
    laticinios: document.getElementById("listadelaticinios"),
    padaria: document.getElementById("listadepadaria"),
    bebidas: document.getElementById("listadebebidas"),
    mercearia: document.getElementById("listademercearia")
  };
  
  function adicionarItem() {
    const nome = document.getElementById("nome").value;
    const categoria = document.getElementById("categoria").value;
  
    if (!nome || !categoria) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
  
    if (itemExiste(nome, categoria)) {
      alert("Item já está na lista!");
      return;
    }
  
    const li = criarElementoLista(nome);
    listas[categoria].appendChild(li);
    document.getElementById("cadastroForm").reset();
  }
  
  function criarElementoLista(nome) {
    const li = document.createElement("li");
    li.textContent = nome;
  
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.innerHTML = "×";
    li.appendChild(removeButton);
  
    li.addEventListener("click", function () {
      li.classList.toggle("pego");
    });
  
    removeButton.addEventListener("click", function (e) {
      e.stopPropagation();
      li.remove();
    });
  
    return li;
  }
  
  function itemExiste(nome, categoria) {
    const items = listas[categoria].getElementsByTagName("li");
    for (let item of items) {
      if (item.textContent === nome) {
        return true;
      }
    }
    return false;
  }
  
