import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../lib/renderWithProviders";
import App from "../App";
import {
  register as apiRegister,
  getUsers,
} from "../services/http";
import {
  RegisterResponse,
  GetUsersResponse,
} from "../types/api";
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
vi.mock("../services/http", () => ({
  register: vi.fn(() =>
    Promise.resolve({
      data: {
        token: "fake_token",
        id: 1,
      },
    })
  ),
  getUsers: vi.fn(),
  verifyToken: vi.fn(),
  getUserById: vi.fn(() =>
    Promise.resolve({
      data: {
        data: {
          id: 1,
          email: "user@example.com",
          first_name: "First",
          last_name: "Last",
        },
      },
    })
  ),
}));

describe("SignUpPage", () => {
  it("allows the user to Register with email and password", async () => {
    const mockRegisterResponse: RegisterResponse = {
      data: {
        token: "fake_token",
        id: 1,
      },
    };

    const mockUsersResponse: GetUsersResponse = {
      data: {
        data: [
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
    };

    vi.mocked(apiRegister).mockResolvedValue(
      mockRegisterResponse as AxiosResponse
    );
    vi.mocked(getUsers).mockResolvedValue(
      mockUsersResponse as AxiosResponse
    );

    renderWithProviders(<App />, ["/signup"]);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput =
      screen.getByLabelText(/password/i);
    const registerButton = screen.getByRole("button", {
      name: /register/i,
    });

    await userEvent.type(emailInput, "eve.holt@reqres.in");
    await userEvent.type(passwordInput, "cityslicka");
    await userEvent.click(registerButton);

    expect(apiRegister).toHaveBeenCalledWith(
      "eve.holt@reqres.in",
      "cityslicka"
    );

    await screen.findByText(/Secure Dashboard/i);

    expect(
      screen.queryByText(/sign up/i)
    ).not.toBeInTheDocument();
  });
});
