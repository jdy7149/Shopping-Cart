import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import CartItem from './CartItem';
import userEvent from '@testing-library/user-event';

describe('CartItem', () => {
  const product = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  it('renders product data', () => {
    render(<CartItem product={product} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', product.image);

    expect(
      screen.getByRole('heading', { name: product.title }),
    ).toBeInTheDocument();

    expect(screen.getByText(product.price)).toBeInTheDocument();

    expect(screen.getByText(product.description)).toBeInTheDocument();

    expect(screen.getByText(product.rating.rate)).toBeInTheDocument();
  });

  it('renders number input with correct quantity', () => {
    render(<CartItem product={product} quantity={3} />);
    const input = screen.getByRole('spinbutton');

    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();
    expect(input).toBeVisible();
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveValue(3);
  });

  it('renders button to increment value of input', () => {
    render(<CartItem product={product} />);
    const incrementButton = screen.getByRole('button', { name: '+' });

    expect(incrementButton).toBeInTheDocument();
  });

  it('updates quantity of product to add 1 when clicking plus button', async () => {
    const user = userEvent.setup();
    const updateQuantity = vi.fn();

    render(
      <CartItem
        product={product}
        quantity={3}
        updateQuantity={updateQuantity}
      />,
    );
    const incrementButton = screen.getByRole('button', { name: '+' });

    await user.click(incrementButton);

    expect(updateQuantity).toHaveBeenCalledOnce();
    expect(updateQuantity).toHaveBeenCalledWith(product.id, 4);
  });

  it('renders button to decrement value of input', () => {
    render(<CartItem product={product} />);
    const decrementButton = screen.getByRole('button', { name: '-' });

    expect(decrementButton).toBeInTheDocument();
  });

  it('does not decrement the input value below 1', async () => {
    const user = userEvent.setup();
    const updateQuantity = vi.fn();

    render(
      <CartItem
        product={product}
        quantity={1}
        updateQuantity={updateQuantity}
      />,
    );
    const decrementButton = screen.getByRole('button', { name: '-' });

    await user.click(decrementButton);

    expect(updateQuantity).not.toHaveBeenCalled();
  });

  it('updates quantity of product to subtract 1 when clicking minus button', async () => {
    const user = userEvent.setup();
    const updateQuantity = vi.fn();

    render(
      <CartItem
        product={product}
        quantity={3}
        updateQuantity={updateQuantity}
      />,
    );
    const decrementButton = screen.getByRole('button', { name: '-' });

    await user.click(decrementButton);

    expect(updateQuantity).toHaveBeenCalledOnce();
    expect(updateQuantity).toHaveBeenCalledWith(product.id, 2);
  });

  it('renders delete button', () => {
    render(<CartItem product={product} />);
    const deleteButton = screen.getByRole('button', { name: /delete/i });

    expect(deleteButton).toBeInTheDocument();
  });

  it('delete item when clicking delete button', async () => {
    const user = userEvent.setup();
    const deleteItem = vi.fn();

    render(<CartItem product={product} deleteItem={deleteItem} />);
    const deleteButton = screen.getByRole('button', { name: /delete/i });

    await user.click(deleteButton);

    expect(deleteItem).toHaveBeenCalledOnce();
    expect(deleteItem).toHaveBeenCalledWith(product.id);
  });
});
