import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router';

describe('Header component', () => {
  it('renders correct logo', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /logo/i })).toBeInTheDocument();
  });

  it('renders correct quantity of items in cart', () => {
    render(
      <MemoryRouter>
        <Header itemCount={5} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('button', { name: /cart/i })).toHaveTextContent(
      '5',
    );
  });

  it('renders zero items by default', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('button', { name: /cart/i })).toHaveTextContent(
      '0',
    );
  });
});
