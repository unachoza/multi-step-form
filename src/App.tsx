import StepIndicator from "./components/StepIndicator/StepIndicator";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { formData } from "./constants/data";
import "./App.css";

function App() {
	return (
		<main className="container">
			<section className="step-indicator">
				<StepIndicator />
			</section>
			<section className="user-form-container">
				<Header title={formData[0].heading} subtitle={formData[0].subHeading} />
				<Form />
			</section>
		</main>
	);
}

export default App;
