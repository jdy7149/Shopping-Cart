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

  describe('product information', () => {
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
  });

  describe('quantity controls', () => {
    it('renders the quantity input with the supplied quantity', () => {
      render(<CartItem product={product} quantity={3} />);
      const input = screen.getByRole('spinbutton');

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('readonly');
      expect(input).toBeVisible();
      expect(input).toHaveAttribute('min', '1');
      expect(input).toHaveValue(3);
    });

    it('renders button to increment quantity', () => {
      render(<CartItem product={product} />);
      const incrementButton = screen.getByRole('button', { name: '+' });

      expect(incrementButton).toBeInTheDocument();
    });

    it('requests an incremented quantity when clicking +', async () => {
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

    it('renders button to decrement quantity', () => {
      render(<CartItem product={product} />);
      const decrementButton = screen.getByRole('button', { name: '-' });

      expect(decrementButton).toBeInTheDocument();
    });

    it('requests a decremented quantity when clicking -', async () => {
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

    it('does not request a quantity update when quantity is 1 and - is clicked', async () => {
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
  });

  describe('remove item', () => {
    it('renders delete button', () => {
      render(<CartItem product={product} />);
      const deleteButton = screen.getByRole('button', { name: /delete/i });

      expect(deleteButton).toBeInTheDocument();
    });

    it('calls deleteItem with the product ID when clicking delete button', async () => {
      const user = userEvent.setup();
      const deleteItem = vi.fn();

      render(<CartItem product={product} deleteItem={deleteItem} />);
      const deleteButton = screen.getByRole('button', { name: /delete/i });

      await user.click(deleteButton);

      expect(deleteItem).toHaveBeenCalledOnce();
      expect(deleteItem).toHaveBeenCalledWith(product.id);
    });
  });
});
