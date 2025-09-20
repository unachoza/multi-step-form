import { useState } from "react";
import StepIndicator from "./components/StepIndicator/StepIndicator";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<main className="container">
			<section className="step-indicator">
				<StepIndicator />
			</section>
			<section className="user-form-container">
				<Form />
			</section>
		</main>
	);
}

export default App;
