import "./Header.css";

interface HeaderProps {
	title: string;
	subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
	return (
		<>
			<h1 className="heading-title">{title}</h1>
			<p className="subheading">{subtitle}</p>
		</>
	);
};

export default Header;
