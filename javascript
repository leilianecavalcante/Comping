document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript está funcionando!");

  document.getElementById("cadastroForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const categoria = document.getElementById("categoria").value;

    if (!nome || !categoria) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

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

    switch (categoria) {
      case "frutas":
        document.getElementById("listafrutas").appendChild(li);
        break;
      case "limpeza":
        document.getElementById("listalimpeza").appendChild(li);
        break;
      case "carnes":
        document.getElementById("listadecarnes").appendChild(li);
        break;
      case "laticinios":
        document.getElementById("listadelaticinios").appendChild(li);
        break;
      case "padaria":
        document.getElementById("listadepadaria").appendChild(li);
        break;
      case "bebidas":
        document.getElementById("listadebebidas").appendChild(li);
        break;
      case "mercearia":
        document.getElementById("listademercearia").appendChild(li);
        break;
    }

    document.getElementById("cadastroForm").reset();
  });
});
