# TMagination Keyboards Shopping Website

The project is a React-based shopping mall application.

# Backend Repository

[Backend Respository] : ()

# Features

- Create:
-

# Technologies Used

Frontend

Backend

# Project Structure

- **Components:** Organized into modular components for better code organization and reusability.
- **State Management:** Utilized React state for efficient data handling and updates.

# Getting Started

1. Clone the repository: `git clone https://github.com/your-username/react-todo-app.git`
2. Navigate to the project directory: `cd todo-portfolio-app`
3. Install dependencies: `yarn install`
4. Run the development server: `yarn start`

# Challenges and Learnings

1. Navbar

- It features a structured navigation bar created using react-bootstrap.
- Each section of the navigation bar is encapsulated by a Nav.Link component, which provides the necessary href attribute.
- The application includes a Cart Component with the following features:
  - Upon loading the website, the Cart Component displays the number of products currently in the cart. This is achieved by using the useEffect hook and localStorage.getItem(‘cart’).
  - The retrieved cart data is then parsed using JSON.parse(cartLocalStorage) and dispatched to a reducer.
  - As a result, the count of products in the cart is displayed using {cart.length}.
