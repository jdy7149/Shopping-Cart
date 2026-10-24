import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ProductCard from './ProductCard';
import userEvent from '@testing-library/user-event';

describe('Product Card', () => {
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
      render(<ProductCard product={product} />);

      expect(screen.getByRole('img')).toBeInTheDocument();
      expect(screen.getByRole('img')).toHaveAttribute('src', product.image);

      expect(screen.getByText(product.title)).toBeInTheDocument();

      expect(screen.getByText(`$ ${product.price}`)).toBeInTheDocument();

      expect(screen.getByText(product.description)).toBeInTheDocument();

      expect(screen.getByText(product.rating.rate)).toBeInTheDocument();
    });
  });

  describe('quantity controls', () => {
    it('renders number input with default value of 1', () => {
      render(<ProductCard product={product} />);
      const input = screen.getByRole('spinbutton');

      expect(input).toBeInTheDocument();
      expect(input).toBeEnabled();
      expect(input).toBeVisible();
      expect(input).toHaveAttribute('min', '1');
      expect(input).toHaveValue(1);
    });

    it('renders button to increment value of input', () => {
      render(<ProductCard product={product} />);
      const incrementButton = screen.getByRole('button', { name: '+' });

      expect(incrementButton).toBeInTheDocument();
    });

    it('increment value of input by 1 when clicking plus button', async () => {
      const user = userEvent.setup();

      render(<ProductCard product={product} />);
      const input = screen.getByRole('spinbutton');
      const incrementButton = screen.getByRole('button', { name: '+' });

      await user.click(incrementButton);

      expect(input).toHaveValue(2);
    });

    it('renders button to decrement value of input', () => {
      render(<ProductCard product={product} />);
      const decrementButton = screen.getByRole('button', { name: '-' });

      expect(decrementButton).toBeInTheDocument();
    });

    it('does not decrement the input value below 1', async () => {
      const user = userEvent.setup();

      render(<ProductCard product={product} />);
      const input = screen.getByRole('spinbutton');
      const decrementButton = screen.getByRole('button', { name: '-' });

      await user.click(decrementButton);

      expect(input).toHaveValue(1);
    });

    it('decrements value of input by 1 when clicking minus button', async () => {
      const user = userEvent.setup();

      render(<ProductCard product={product} />);
      const input = screen.getByRole('spinbutton');
      const decrementButton = screen.getByRole('button', { name: '-' });

      await user.clear(input);
      await user.type(input, '3');

      expect(input).toHaveValue(3);

      await user.click(decrementButton);

      expect(input).toHaveValue(2);
    });

    it('resets the quantity to 1 when the input is cleared and loses focus', async () => {
      const user = userEvent.setup();

      render(<ProductCard product={product} />);

      const input = screen.getByRole('spinbutton');

      await user.clear(input);
      await user.tab();

      expect(input).toHaveValue(1);
    });

    it('resets the quantity to 1 when the user enters 0 and loses focus', async () => {
      const user = userEvent.setup();

      render(<ProductCard product={product} />);

      const input = screen.getByRole('spinbutton');

      await user.clear(input);
      await user.type(input, '0');
      await user.tab();

      expect(input).toHaveValue(1);
    });
  });

  describe('add to cart', () => {
    it('renders add to cart button', () => {
      render(<ProductCard product={product} />);
      const addButton = screen.getByRole('button', { name: /add to cart/i });

      expect(addButton).toBeInTheDocument();
    });

    it('adds item to cart when clicking add to cart button', async () => {
      const user = userEvent.setup();
      const addItem = vi.fn();

      render(<ProductCard product={product} addItem={addItem} />);
      const input = screen.getByRole('spinbutton');
      const addButton = screen.getByRole('button', { name: /add to cart/i });

      await user.clear(input);
      await user.type(input, '3');
      await user.click(addButton);

      expect(addItem).toHaveBeenCalledOnce();
      expect(addItem).toHaveBeenCalledWith(product, 3);
    });
  });
});
