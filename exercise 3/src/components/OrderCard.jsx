export default function OrderCard({ product, price, quantity, onQuantityChange }) {
  const handleDecrease = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>$ {price}</small>
      </div>

      <div className="order-quantity">
        <div 
          className={`order-button ${quantity === 0 ? 'disabled' : ''}`}
          onClick={handleDecrease}
        >
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={handleIncrease}>+</div>
      </div>
    </div>
  );
}
