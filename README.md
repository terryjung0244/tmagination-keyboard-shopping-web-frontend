# TMagination Keyboards Shopping Website

The Tmagination Keyboard Shopping Web Frontend is a user-friendly interface for browsing and purchasing keyboards. It provides an intuitive shopping experience, allowing users to explore various keyboard models, compare features, and make informed decisions. The frontend is built using modern web technologies, ensuring responsiveness and accessibility across devices. Whether you’re a casual typist or a professional gamer, Tmagination Keyboard Shopping Web Frontend has you covered!

# Backend Repository

[Backend Respository](https://github.com/terryjung0244/tmagination-keyboard-shopping-web-backend.git)

# Features

- **Dashboard** Implemented a comprehensive dashboard feature, providing an intuitive interface for creating new keyboard entries, managing inventory, and updating pricing or data as needed.

- **Create:** This feature allows users to add new items to the shopping cart. Whether it’s a mechanical keyboard or a set of keycaps, users can easily select their desired products and add them to their cart.

- **Read:** Users can browse through the wide variety of keyboards available on the website. Detailed product information, including images, descriptions, and prices, are readily accessible.

- **Update:** The ‘update’ feature allows users to change the product information that was initially entered at a later time. This includes key product details such as price, quantity, and name. Through this function, users can keep the product information up-to-date. This is particularly useful when the price of a product changes or when the stock quantity changes.

- **Delete:** Users can remove items from their cart with just a click, keeping their shopping experience hassle-free.

- **Check out:** User can proceed to the checkout page. They can review their order, enter shipping information.

# Technologies Used

Frontend

- **React** React’s modular approach allows developers to build reusable UI components, promoting code organization, maintainability, and efficient development.

- **Typescript** To enhance code quality, catch type-related errors during development, and improve maintainability, I utilized TypeScript in the React keyboard shopping mall website.

- **Redux Slice** To manage cart functionality, including updating quantities, adding and deleting items, and loading the initial cart state for returning users.

- **Firebase** Implemented Firebase functionality in the project to manage image storage without needing a separate backend server.

- **Cart local storage** The Cart Local Storage feature preserves the user’s shopping cart data within the browser’s local storage. This ensures a persistent shopping experience, maintaining the state of the user’s cart across multiple website visits.

- **Product sort** The Product Sort feature enables users to arrange products based on different criteria like price and alphabet. This enhancement streamlines the shopping experience, making it easier for users to find exactly what they’re looking for.

Backend

- **Node.js** Built a robust backend server.
- **Express** Created RESTful APIs for communication between frontend and backend.
- **MongoDB** MongoDB’s flexible design lets you easily adapt and modify your data structure. This is especially useful when handling dynamic or evolving product data.

# Project Structure

- **Components:** Organized into modular components for better code organization and reusability.
- **State Management:** Utilized React state for efficient data handling and updates.

# Getting Started

1. Clone the repository:
   Frontend : `git clone https://github.com/terryjung0244/tmagination-keyboard-shopping-web-frontend.git`,
   Backend : `https://github.com/terryjung0244/tmagination-keyboard-shopping-web-backend.git`
2. Install dependencies: `yarn install`
3. Run the development server: `yarn start`

# Challenges and Learnings

- Integration of Technologies :
  Understanding how to integrate frontend technologies with backend technologies initially posed a challenge, but gaining proficiency in seamless communication between these components was a valuable learning experience.

- State Management Complexity :
  I tackled the challenges of structuring the Redux store, handling asynchronous actions, and maintaining clean code while implementing state management with Redux Slice.

- Project Structure and Scalability :
  I learned about modular code design, separation of concerns, and the importance of organizing the project structure for scalability.

- Reflections :
  Throughout this project, I gained valuable insights into the significance of continuous learning, effective collaboration, and unwavering perseverance. As a developer, I proactively tackled challenges and sought opportunities for growth.
