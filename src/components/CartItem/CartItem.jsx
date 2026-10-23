function CartItem({ product, quantity, deleteItem, updateQuantity }) {
  const { id, title, price, description, image, rating } = product;

  function handleDecrement() {
    if (quantity <= 1) return;

    updateQuantity(id, quantity - 1);
  }

  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <div>{rating.rate}</div>
      <p>{description}</p>
      <div>{price}</div>
      <div>
        <button type="button" onClick={handleDecrement}>-</button>
        <input type="number" name="quantity" value={quantity} min="1" readOnly onChange={(e) => updateQuantity(id, e.target.value)} />
        <button type="button" onClick={() => updateQuantity(id, quantity + 1)}>+</button>
      </div>
      <button type="button" onClick={() => deleteItem(id)}>Delete</button>
    </div>
  )
}

export default CartItem;