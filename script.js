window.onload = function() {
    let corPreSelecionada = document.getElementById("black");
    corPreSelecionada.className += " selected";
}

let corClique = document.getElementById("color-palette");
corClique.addEventListener("click", corSelecionada);

function corSelecionada(eventOrigem) {
    let IdClique = eventOrigem.target.id;
    document.getElementById("black").className = "color"; 
    document.getElementById("red").className = "color";
    document.getElementById("blue").className = "color";
    document.getElementById("green").className = "color";

    if (IdClique == "black" || IdClique == "red" || 
    IdClique == "blue" || IdClique == "green") {
        document.getElementById(IdClique).className = "color selected";
    }
}

