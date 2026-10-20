let produtos = []
const nomeProduto = document.getElementById("nomeProduto")
const btnCadastrar = document.getElementById("btnCadastrar")
const listaProdutos = document.getElementById("listaProdutos")
function adicionaarProduto(){

let nome = nomeProduto.value;
produtos.push(nome)
nomeProduto.value = ""
imprimirLista()
}
function imprimirLista(){
    listaProdutos.innerHTML = "";
    for (let i = 0; i<produtos.length; i++){
        let item = document.createElement("li");
        item.textContent = produtos[i];
        listaProdutos.appendChild(item);
    }
}
btnCadastrar.addEventListener("click",adicionaarProduto);