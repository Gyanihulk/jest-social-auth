# Secure User Management Dashboard

This project is a practical test assignment provided by WebReinvent for building a **Secure User Management Dashboard** using **Vite + React** and **TypeScript**.

## Project Overview

The application is a secure, user-friendly dashboard that allows users to register, sign in, and access protected resources. It leverages the [ReqRes REST API](https://reqres.in/) for user authentication and data retrieval, and it is developed following the **Test Driven Development (TDD)** approach to ensure code reliability and maintainability.

## Features

1. **User Authentication:**

   - Sign In and Sign Up pages allow users to register and log in to the application.
   - Authenticated users can access the protected dashboard.

2. **State Management:**
   - Pinia is designed to work with Vue frameworks, so I have used Redux in this project for managing global user authentication and data state
3. **Styling with Tailwind CSS:**

   - Tailwind CSS is integrated for responsive and modular design, ensuring a clean and modern UI.
     Ref:https://github.com/vuejs/pinia/discussions/1883#discussioncomment-4472755

4. **Protected Routes:**

   - Middleware ensures that the dashboard page is only accessible to authenticated users.

5. **Reusable Components:**
   - Common UI components like forms, buttons, and modals are designed for reusability and maintainability.
6. **Named Slots:**

   - Components use named slots to enhance reusability and flexibility.

7. **HTTP Services:**

   - Reusable HTTP services interact with the ReqRes API for performing authentication and data retrieval.

8. **Unit Testing and TDD:**
   - The project follows the TDD approach, ensuring robust test coverage for critical functionality like authentication and HTTP services.
   - Unit tests are implemented using **Vitest**, with full coverage reports included.

## Project Structure

```bash
src/
│
├── components/         # Reusable UI components like buttons, forms, and modals
├── pages/              # Sign In, Sign Up, and Dashboard pages
├── services/           # HTTP services for interacting with the ReqRes API
├── stores/             # Redux store for managing application state
├── middlewares/        # Route protection for authenticated Pages
├── lib/                # Helper functions and utilities
└── __test__/           # Unit test files using Vitest
```

## Technologies Used

- **React** (with Vite for fast bundling and development)
- **TypeScript** for static type checking
- **Redux** for state management (Pinia is designed for Vue.js, so Redux is used here)
- **Tailwind CSS** for styling
- **ReqRes API** for user authentication and data
- **Vitest** for unit testing

## How to Run

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Gyanihulk/secure-user-management-dashboard.git
   cd secure-user-management-dashboard
   ```

2. **Install Dependencies:**

  ```bash
  yarn install
  ```

3. **Run the Application:**

  ```bash
  yarn dev
  ```

4. **Run Tests:**

  ```bash
  yarn test
  ```

5. **Check Coverage:**

  ```bash
  yarn coverage
  ```
