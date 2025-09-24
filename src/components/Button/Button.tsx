import "./Button.css";

interface ButtonProps {
	text: string;
	type: "submit" | "reset" | "button";
	handleClick: any;
}

const Button = ({ text, type, handleClick }: ButtonProps) => {
	return (
		<div className="button-container">
			<button type={type} onClick={handleClick}>
				{text}
			</button>
		</div>
	);
};

export default Button;
