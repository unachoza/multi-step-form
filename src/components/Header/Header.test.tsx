import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
	it("sucessfully renders on the browswer", () => {
		render(<Header title="sample title" subtitle="sample subtitle" />);
		const titleElement = screen.queryByRole("heading");
		expect(titleElement).toBeInTheDocument();
	});
});
