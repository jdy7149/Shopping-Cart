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

  it('renders a button to browse shop', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByRole('button', { name: /shop/i })).toBeInTheDocument();
  });

  it('renders button destined to shop', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByRole('button', { name: /shop/i })).toHaveAttribute(
      'href',
      '/shop',
    );
  });
});
