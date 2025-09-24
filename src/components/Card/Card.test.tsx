import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
	it("sucessfully renders on the browswer", () => {
		render(<Card name="sample name" description="sample description" className="plan" />);
	});
});
