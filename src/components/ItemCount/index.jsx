import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd, productName }) {
  /** hook de estado para quantidade a adicionar no carrinho */
  const [qty, setQty] = useState(initial);

  /** hook de estado para quantidade de estoque */
  const [remain, setRemain] = useState(stock);

  /** função para manipular o onClick do botão de "-"
   * Função criada para separar a lógica do JSX.
   * De acordo com a aula, os hooks devem ser sempre executados, e por isso não
   * devem ficar dentro de estruturas lógicas como if/else / for / ternário.
   * Assim, fiz a lógica criando uma variável auxiliar para salvar o resultado
   * da condicional, para ser usada no "setQty".
   */
  const handleMinus = () => {
    let minus = 0;
    if (qty !== 0) minus = qty - 1;
    setQty(minus);
  };

  /** função para manipular o onClick do botão de "+" */
  const handlePlus = () => {
    let plus = 0;
    qty < remain ? (plus = qty + 1) : (plus = remain);
    setQty(plus);
  };

  /** função onAdd para manipular o onClick do botão de "adicionar ao carrinho" */
  onAdd = () => {
    let add = 0;
    qty <= remain ? (add = remain - qty) : (add = remain);
    setRemain(add);
  };

  return (
    <div className="card-body d-inline">
      <h3 className="text-secondary">{productName}</h3>
      <h4 className="text-secondary">em stock: {remain}</h4>
      <div className="card">
        <div
          className="btn-group d-flex justify-content-between m-1 border rounded"
          role="group"
          aria-label="contador"
        >
          <button
            type="button"
            className="btn btn-light text-primary"
            onClick={handleMinus}
          >
            -
          </button>
          <span className="text-secondary align-self-center">{qty}</span>
          <button
            type="button"
            className="btn btn-light text-primary"
            onClick={handlePlus}
          >
            +
          </button>
        </div>
        <button type="button" className="btn btn-primary m-1" onClick={onAdd}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
