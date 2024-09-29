import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../lib/renderWithProviders";
import App from "../App"; 
import { register as apiRegister, getUsers } from "../services/http"; 
import { GetUsersResponse, RegisterResponse } from "../types/api";

// Mock the register and getUsers services
vi.mock("../services/http", () => ({
  register: vi.fn(),
  getUsers: vi.fn(), // Mock getUsers
}));

describe("SignInPage", () => {
  it("allows the user to Register with email and password", async () => {
    // Mock the API register response
    const mockRegisterResponse :RegisterResponse= {
      data: {
        token: "fake_token",
        user: { id: 1, name: "Eve Holt" },
      },
    };

    // Mock the getUsers API response
    const mockUsersResponse :GetUsersResponse= {
      data: {
        data: [
          { id: 1, name: "John Doe" },
          { id: 2, name: "Jane Doe" },
        ],
      },
    };

    // Mock the API calls
    (apiRegister as jest.MockedFunction<typeof apiRegister>).mockResolvedValue(mockRegisterResponse);
    (getUsers as jest.MockedFunction<typeof getUsers>).mockResolvedValue(mockUsersResponse);

    // Render the App with the initial route set to "/signin"
    renderWithProviders(<App />, ["/signup"]);

    // Find the input fields
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const registerButton = screen.getByRole("button", { name: /register/i });

    // Simulate user typing in the email and password
    await userEvent.type(emailInput, "eve.holt@reqres.in");
    await userEvent.type(passwordInput, "cityslicka");

    // Click the login button
    await userEvent.click(registerButton);

    // Verify that the API login function is called with the correct email and password
    expect(apiRegister).toHaveBeenCalledWith("eve.holt@reqres.in", "cityslicka");
    // After the login request, ensure the dashboard navigation happens
    expect(screen.queryByText(/Secure Dashboard/i)).toBeInTheDocument(); 

    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument(); // Should be redirected to Dashboard
  });
});
