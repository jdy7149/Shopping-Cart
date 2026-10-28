# Shopping Cart

**Project:** Shopping Cart from [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart)

[🔗 Live Preview](https://greatshoppingcart.netlify.app/)

## Overview

A responsive shopping cart SPA built with React. Users can browse products, select quantities, add items to their cart, update quantities, and remove items.

Product data is fetched from the Fake Store API.

## Tech Stack

- **JavaScript** — application logic and event handling
- **React** — component-based UI development
- **React Router** — client-side routing and nested layouts
- **CSS Modules** — component-scoped styling and responsive layouts
- **Vitest** — unit and component testing
- **React Testing Library** — testing rendered UI and user interactions
- **Netlify** — deployment

## Features

- Browse products fetched from the Fake Store API
- Add products to the cart and update item quantities
- Automatically increase the quantity when adding an existing product
- Remove items from the cart
- Navigate between the home, shop, and cart pages without full-page navigation
- Display loading and error states during API requests
- Responsive layouts for desktop and mobile screens

## Project Objective

The main objective of this project was to build a single-page application using React Router and practice testing React components with Vitest and React Testing Library.

I focused on configuring nested routes, managing shared state through React Router's Outlet context, and writing tests for asynchronous behavior, user interactions, and component dependencies.

## What I Learned

- **React Router:** Configured nested routes and index routes, used `createMemoryRouter` to test navigation, and shared cart state with child routes through Outlet context.

- **Asynchronous testing:** Tested API requests and loading states, used `findBy...` queries to handle asynchronously rendered content, and learned when to use `waitForElementToBeRemoved` to verify that loading indicators disappear after a request completes.

- **Mocking and stubbing:** Used `vi.stubGlobal()` to replace the Fetch API with controlled responses, `vi.fn()` to verify callback invocations and arguments, and `vi.mock()` to isolate parent component tests from child component implementations.

- **Component testing:** Used React Testing Library to verify rendered content, accessible roles, user interactions, callback behavior, and error handling without testing implementation details directly.

- **CSS Modules:** Organized component-specific styles and built responsive layouts without unintentionally affecting other components.

## Credits

- **General icons:** [Material Design Icons](https://pictogrammers.com/library/mdi/)
- **Hero image:** [kapoor1952 on Pixabay](https://pixabay.com/users/kapoor1952-42383556/)
