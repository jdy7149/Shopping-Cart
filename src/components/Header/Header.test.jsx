import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router';

describe('Header component', () => {
  it('renders a logo link to home', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const logo = screen.getByRole('link', { name: /logo/i });

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('href', '/');
  });

  it('renders a shop link to the shop page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const shopLink = screen.getByRole('link', { name: /shop/i });

    expect(shopLink).toBeInTheDocument();
    expect(shopLink).toHaveAttribute('href', '/shop');
  });

  it('renders a cart link to the cart page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const cartLink = screen.getByRole('link', { name: /cart/i });

    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute('href', '/cart');
  });

  it('renders the correct quantity of items in the cart', () => {
    render(
      <MemoryRouter>
        <Header itemCount={5} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /cart/i })).toHaveTextContent('5');
  });

});
