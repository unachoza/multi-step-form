import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
	it("should render form and two card images", () => {
		render(<App />);
		const titleText = screen.queryByRole("heading");
		expect(titleText).toBeVisible();
		expect(titleText).toHaveTextContent("Vite + React");
	});
});
