import { render, screen } from "@testing-library/react";
import StepIndicator from "./StepIndicator";

describe("StepIndicator component", () => {
	it("sucessfully renders on the browswer", () => {
		render(<StepIndicator />);
		const stepsArray = screen.queryAllByText(/step/);
		console.log({ stepsArray });
		expect(stepsArray.length).toEqual(4);
	});
});
