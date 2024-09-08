function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    let campoPesquisa = document.getElementById("campo-pesquisa").value


if (campoPesquisa == ""){
    section.innerHTML = "<p>Nenhum movimento foi encontrado. Digite o nome de um movimento</p>"
    return
}   

    campoPesquisa = campoPesquisa.toLowerCase()

let resolução = "";
let movimento = "";
let descricao = "";
let tags = "";


for (let itemlista of conteudo) {
        movimento = itemlista.movimento.toLowerCase()
        descricao = itemlista.descricao.toLowerCase()
        tags = itemlista.tags.toLowerCase()
    if (movimento.includes (campoPesquisa) || descricao.includes (campoPesquisa) || tags.includes (campoPesquisa)) {
        resolução += `
    <div class="item-resultado">
        <h2>
            <a href="#"target="_blank">${itemlista.movimento}</a> 
         </h2>
        <p class="descricao-meta">${itemlista.descricao}</p>
        <a href= ${itemlista.linkvideo} target="_blank">Saiba mais clicando aqui</a>
        </div>

`;
   }

}
section.innerHTML = resolução
}





