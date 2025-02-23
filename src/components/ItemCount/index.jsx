
import React, { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(10);

  const incrementCount = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert('Estoque insuficiente!');
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="count-style">
      <h1>Itens no Carrinho</h1>
      <p>Quantidade:
			<button onClick={decrementCount}>-</button> {count}<button onClick={incrementCount}>+</button></p>


    </div>
  );
};

export default ItemCount;
