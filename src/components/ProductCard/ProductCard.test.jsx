import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProductCard from './ProductCard';
import userEvent from '@testing-library/user-event';

describe('Product Card', () => {
  it('renders product data', () => {
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

    render(<ProductCard product={product} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', product.image);

    expect(
      screen.getByRole('heading', { name: product.title }),
    ).toBeInTheDocument();

    expect(screen.getByText(product.price)).toBeInTheDocument();

    expect(screen.getByText(product.description)).toBeInTheDocument();

    expect(screen.getByText(product.rating.rate)).toBeInTheDocument();
  });

  it('renders number input with default value of 1', () => {
    render(<ProductCard />);
    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toBeEnabled();
    expect(input).toBeVisible();
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveValue(1);
  });

  it('renders button to increment value of input', () => {
    render(<ProductCard />);
    const incrementButton = screen.getByRole('button', { name: '+' });

    expect(incrementButton).toBeInTheDocument();
  });

  it('increment value of input by 1 when clicking plus button', async () => {
    const user = userEvent.setup();

    render(<ProductCard />);
    const input = screen.getByRole('spinbutton');
    const incrementButton = screen.getByRole('button', { name: '+' });

    await user.click(incrementButton);

    expect(input).toHaveValue(2);
  });

  it('renders button to decrement value of input', () => {
    render(<ProductCard />);
    const decrementButton = screen.getByRole('button', { name: '-' });

    expect(decrementButton).toBeInTheDocument();
  });

  it('does not decrement the input value below 1', async () => {
    const user = userEvent.setup();

    render(<ProductCard />);
    const input = screen.getByRole('spinbutton');
    const decrementButton = screen.getByRole('button', { name: '-' });

    await user.click(decrementButton);

    expect(input).toHaveValue(1);
  });

  it('decrements value of input by 1 when clicking minus button', async () => {
    const user = userEvent.setup();

    render(<ProductCard />);
    const input = screen.getByRole('spinbutton');
    const decrementButton = screen.getByRole('button', { name: '-' });

    user.clear(input);
    user.type(input, '3');

    await user.click(decrementButton);

    expect(input).toHaveValue(2);
  });
});
