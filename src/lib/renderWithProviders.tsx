import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store as defaultStore } from "../stores/userStore";

const renderWithProviders = (
  ui: React.ReactElement,
  initialEntries: string[] = ["/"],
  { store = defaultStore } = {}
) => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={initialEntries}>
        {ui}
      </MemoryRouter>
    </Provider>
  );
};

export default renderWithProviders;
