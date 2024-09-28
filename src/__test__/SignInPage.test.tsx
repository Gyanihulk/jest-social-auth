import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../lib/renderWithProviders";
import App from "../App"; // Assuming App contains routing logic
import { login as apiLogin, getUsers } from "../services/http"; // Import getUsers

// Mock the login and getUsers services
vi.mock("../services/http", () => ({
  login: vi.fn(),
  getUsers: vi.fn(), // Mock getUsers
}));

describe("SignInPage", () => {
  it("allows the user to login with email and password", async () => {
    // Mock the API login response
    const mockLoginResponse = {
      data: {
        token: "fake_token",
        user: { id: 1, name: "Eve Holt" },
      },
    };

    // Mock the getUsers API response
    const mockUsersResponse = {
      data: {
        data: [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Doe" },
        ],
      },
    };

    // Mock the API calls
    (apiLogin as any).mockResolvedValue(mockLoginResponse);
    (getUsers as any).mockResolvedValue(mockUsersResponse); // Mocking getUsers

    // Render the App with the initial route set to "/signin"
    renderWithProviders(<App />, ["/signin"]);

    // Find the input fields
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", { name: /login/i });

    // Simulate user typing in the email and password
    await userEvent.type(emailInput, "eve.holt@reqres.in");
    await userEvent.type(passwordInput, "cityslicka");

    // Click the login button
    await userEvent.click(loginButton);

    // Verify that the API login function is called with the correct email and password
    expect(apiLogin).toHaveBeenCalledWith("eve.holt@reqres.in", "cityslicka");

    // After the login request, ensure the dashboard navigation happens
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument(); // Should be redirected to Dashboard
  });
});
