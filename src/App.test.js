import App from "./App";
import renderWithProviders from "./redux/utils/testing.utils";

describe("Given an App component", () => {
  describe("When it renders", () => {
    test("Then it should render", () => {
      renderWithProviders(<App />);
    });
  });
});
