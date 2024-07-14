import React from 'react';
import { useCart } from './CartContext';

const Card = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="card">
      <h3>{item.title}</h3>
      <img src={item.images} alt={item.title} style={{ width: '200px', height: '200px' ,alignSelf:'left'}} />
      <p>Description : {item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.price * item.quantity}</p>
      <div className="card-actions">
      <button onClick={() => increaseQuantity(item.id)}>+</button>
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        
      </div>
    </div>
  );
};

export default Card;
