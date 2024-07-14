import React from 'react';
import { useCart } from './CartContext';
import Card from './Card';

const CartPage = () => {
  const { state } = useCart();

  const totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = state.items.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cards">
        {state.items.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div>
        <h2>Total Quantity: {totalQuantity}</h2>
        <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CartPage;
