import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../lib/renderWithProviders";
import App from "../App"; // Assuming App contains routing logic
import { register as apiSignup, getUsers } from "../services/http"; // Import register and getUsers

// Mock the register and getUsers services
vi.mock("../services/http", () => ({
  register: vi.fn(),
  getUsers: vi.fn(),
}));

// Partial mock for react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom'); // Use the original module
  return {
    ...actual, // Spread original exports
    useNavigate: () => mockNavigate, // Mock useNavigate
    Link: ({ children }: { children: React.ReactNode }) => <>{children}</>, // Mock Link
  };
});

// Mock useNavigate from react-router-dom
const mockNavigate = vi.fn();

describe("SignUpPage", () => {
  it("allows the user to sign up with email and password", async () => {
    // Mock the API signup response
    const mockSignupResponse = {
      data: {
        token: "fake_token",
        user: { id: 1, name: "Eve Holt" },
      },
    };

    // Mock the getUsers API response for the dashboard or another page
    const mockUsersResponse = {
      data: {
        data: [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Doe" },
        ],
      },
    };

    // Mock the API calls
    (apiSignup as any).mockResolvedValue(mockSignupResponse); // Mock register (signup)
    (getUsers as any).mockResolvedValue(mockUsersResponse); // Mocking getUsers

    // Render the App with the initial route set to "/signup"
    renderWithProviders(<App />, ["/signup"]);

    // Find the input fields
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const signUpButton = screen.getByRole("button", { name: /register/i });

    // Simulate user typing in the email and password
    await userEvent.type(emailInput, "eve.holt@reqres.in");
    await userEvent.type(passwordInput, "cityslicka");

    // Click the signup button
    await userEvent.click(signUpButton);

    // Verify that the API signup function is called with the correct email and password
    expect(apiSignup).toHaveBeenCalledWith("eve.holt@reqres.in", "cityslicka");

    // Check that navigation to "/signin" occurs after a successful registration
    expect(mockNavigate).toHaveBeenCalledWith("/signin");
  });
});
