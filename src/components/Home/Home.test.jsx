import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import Home from './Home';

describe('Home component', () => {
  it('renders home page', () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders a link to browse shop', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const shopLink = screen.getByRole('link', { name: /shop/i });

    expect(shopLink).toBeInTheDocument();
    expect(shopLink).toHaveAttribute('href', '/shop');
  });
});
