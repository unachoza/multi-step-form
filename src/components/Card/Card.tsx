import "./Card.css";

interface CardProps {
	name: string;
	description: string;
	className: string;
}

const Card = ({ name, description, className }: CardProps) => {
	return (
		<div className={`${className}-card`}>
			<h3>{name}</h3>
			<p>{description}</p>
		</div>
	);
};

export default Card;
