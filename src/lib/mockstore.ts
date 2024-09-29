import { store as defaultStore } from "../stores/userStore"; // Adjust the path to your actual store

// Mock store for authenticated user
export const authenticatedMockStore = {
  ...defaultStore,
  getState: () => ({
    auth: {
      isAuthenticated: true,
      user: { id: 1, first_name: 'John' , last_name: ' Doe', avatar: 'image', email: 'JohnDoe@gyani.com'}, 
    },
  }),
};

// Mock store for non-authenticated user
export const nonAuthenticatedMockStore = {
  ...defaultStore,
  getState: () => ({
    auth: {
      isAuthenticated: false,
      user: null, 
    },
  }),
};
