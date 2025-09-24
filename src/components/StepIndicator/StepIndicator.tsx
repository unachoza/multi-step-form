import { formData } from "../../constants/data";
import "./StepIndicator.css";

const StepIndicator = () => {
	return (
		<div className="steps">
			{formData.map((step) => {
				return (
					<div className="step-container">
						<circle className="number-circle">{step.stepNumber}</circle>
						<div className="content">
							<div className="step-number">step {step.stepNumber}</div>
							<div className="step-title">{step.title}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default StepIndicator;
