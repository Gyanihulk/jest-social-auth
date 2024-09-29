import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../lib/renderWithProviders";
import App from "../App";
import { login as apiLogin } from "../services/http";
import { AxiosResponse } from "axios";
import { MockIntersectionObserverCallback } from "../types/testCases";

vi.stubGlobal(
  "IntersectionObserver",
  class MockIntersectionObserver {
    private callback: MockIntersectionObserverCallback;
    private elements: Element[] = [];

    constructor(
      callback: MockIntersectionObserverCallback
    ) {
      this.callback = callback;
    }

    observe(element: Element): void {
      this.elements.push(element);
      // Optionally trigger the callback with mock data
      this.callback(
        [{ isIntersecting: true, target: element }],
        this as unknown as IntersectionObserver
      );
    }

    unobserve(element: Element): void {
      this.elements = this.elements.filter(
        (el) => el !== element
      );
    }

    disconnect(): void {
      this.elements = [];
    }
  }
);
// Mock the login and getUsers services
vi.mock("../services/http", () => ({
  login: vi.fn(),
  getUsers: vi.fn(() =>
    Promise.resolve({
      data: {
        data: [
          // Sample users
          {
            id: 3,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar:
              "https://reqres.in/img/faces/7-image.jpg",
          },
          {
            id: 7,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar:
              "https://reqres.in/img/faces/7-image.jpg",
          },
        ],
      },
    })
  ),
  verifyToken: vi.fn(),
}));

describe("SignInPage", () => {
  it("allows the user to login with email and password", async () => {
    // Mock the API login response
    vi.mocked(apiLogin).mockResolvedValue({
      data: {
        token: "fake_token",
        user: { id: 1, first_name: "Eve Holt" },
      },
    } as AxiosResponse);

    // Render the App with the initial route set to "/signin"
    renderWithProviders(<App />, ["/signin"]);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput =
      screen.getByLabelText(/password/i);
    const loginButton = screen.getByRole("button", {
      name: /login/i,
    });

    // Simulate user typing in the email and password
    await userEvent.type(emailInput, "eve.holt@reqres.in");
    await userEvent.type(passwordInput, "cityslicka");

    // Click the login button
    await userEvent.click(loginButton);

    // Verify that the API login function is called with the correct email and password
    expect(apiLogin).toHaveBeenCalledWith(
      "eve.holt@reqres.in",
      "cityslicka"
    );

    // Ensure that no errors are thrown during the test
    expect(
      screen.queryByText(/Secure Dashboard/i)
    ).toBeInTheDocument();
  });
});
