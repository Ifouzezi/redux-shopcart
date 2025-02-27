# React Redux Shopping Cart

This is a simple **React Redux Shopping Cart** application styled with **TailwindCSS**. The project demonstrates state management using **Redux Toolkit** and dynamic UI updates in a modern e-commerce setup.

## Features

- **Product Listing**: Fetches products dynamically from FakeStore API.
- **Add to Cart**: Users can add products to the cart.
- **Remove from Cart**: Users can remove products from the cart.
- **Cart Summary**: Displays total items and price.
- **Responsive Design**: Styled with TailwindCSS for mobile-first design.

## Technologies Used

- **React** (Functional Components, Hooks)
- **Redux Toolkit** (State Management)
- **React Router** (Navigation)
- **TailwindCSS** (Styling)
- **FakeStore API** (Mock product data)

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/redux-shopping-cart.git
   cd redux-shopping-cart
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm start
   ```
4. **Open the application:**
   Visit `http://localhost:3000/` in your browser.

## Redux Store Structure
The Redux store is structured with slices to manage the cart state efficiently.

- **Product Slice**: Manages product list.
- **Cart Slice**: Handles adding/removing items in the cart.

## API Integration
The project fetches product data from FakeStore API:
```js
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => setProducts(data));
```

## Contributing
Feel free to fork this repository, open issues, and submit pull requests to improve the project.

## License
This project is licensed under the MIT License.