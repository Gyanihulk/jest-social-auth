import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import App from "../App";
import renderWithProviders from "../lib/renderWithProviders";
import {
  authenticatedMockStore,
  nonAuthenticatedMockStore,
} from "../lib/mockstore";
import userEvent from "@testing-library/user-event";
describe("App", () => {
  it("renders SignInPage at /signin route", () => {
    renderWithProviders(<App />, ["/signin"]);

    // Expect the SignInPage to be rendered
    expect(
      screen.getByText(/Sign In/i)
    ).toBeInTheDocument();
  });

  it("renders SignUpPage at /signup route", () => {
    renderWithProviders(<App />, ["/signup"]);
    expect(
      screen.getByText(/Sign Up/i)
    ).toBeInTheDocument();
  });

  it("renders DashboardPage at /dashboard route when authenticated", () => {
    renderWithProviders(<App />, ["/dashboard"], {
      store: authenticatedMockStore,
    });

    // Expect the DashboardPage to be rendered
    expect(
      screen.getByRole("heading", { name: /Dashboard/i })
    ).toBeInTheDocument();
  });

  it("redirects to SignInPage when not authenticated on /dashboard route", () => {
    // Use the non-authenticated mock store
    renderWithProviders(<App />, ["/dashboard"], {
      store: nonAuthenticatedMockStore,
    });

    // Expect the SignInPage to be rendered instead of DashboardPage
    expect(
      screen.getByText(/Sign In/i)
    ).toBeInTheDocument();
  });
});

describe("App Navigation", () => {
  it("navigates to /signin when Sign In is clicked", async () => {
    renderWithProviders(<App />);

    // Simulate user clicking on the "Login" link
    const loginLink = screen.getByText(/sign in/i);
    await userEvent.click(loginLink);

    // After clicking, expect to see the SignInPage rendered
    expect(
      screen.getByText(/Sign In Your Account/i)
    ).toBeInTheDocument();
  });

  it("navigates to /signup when Sign Up is clicked", async () => {
    renderWithProviders(<App />);

    // Simulate user clicking on the "Dashboard" link
    const dashboardLink = screen.getByText(/Sign Up/i);
    await userEvent.click(dashboardLink);

    // After clicking, expect to see the Sign Up rendered
    expect(
      screen.getByText(/Sign up for an account/i)
    ).toBeInTheDocument();
  });
});
