function ProdutoCard(props){
    return(
        <div>
            <h2>{props.nomeProduto}</h2>
            <p>Preço: R$ {props.precoProduto.toFixed(2)}</p>
            <p>Descrição: {props.descricao}</p>  
            <p> Quantidade disponivel: {props.quantidadeDisponivel}</p>
            <button>Ver mais</button>
        </div> 
    )
}

export default ProdutoCard;