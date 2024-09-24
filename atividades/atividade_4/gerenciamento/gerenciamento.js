let estoque = [];

function adicionar(id,nome,qtd){
    estoque.push({id,nome,qtd});
    return `Produto ${nome} (ID: ${id}) (Quantidade: ${qtd}) foi adicionado ao estoque.`;
}

function listar(){
    return estoque;
}

function remover(id) {
    const index = estoque.findIndex(produto => produto.id === id);
    if (index !== -1) {
        const produtoRemovido = estoque.splice(index, 1); 
        return `Produto ${produtoRemovido[0].nome} ID:${id} foi removido do estoque.`;
    }
    return `Produto com ID:${id} nao encontrado.`;
}

function editar(id, qtd) {
    const produto = estoque.find(produto => produto.id === id);
    if (produto) {
        produto.quantidade_atualizada = qtd; 
        return `Quantidade do produto ${produto.nome} id:${id} foi atualizada para ${qtd}.`;
    }
    return `Produto com ID ${id} nao encontrado.`;
}

module.exports = {
    adicionar,
    listar,
    remover,
    editar
}