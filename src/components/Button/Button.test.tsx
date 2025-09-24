import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("button component", () => {
	it("sucessfully renders on the browser with text", () => {
		const mockHandleSubmit = vi.fn();
		render(<Button text="example" type="button" handleClick={mockHandleSubmit} />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent(/example/i);
	});
	it("should page back on 'go back' button click", () => {});
	it("should advance in the form when 'next step' button is clicked");
});
