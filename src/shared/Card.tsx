import "./Card.css";

interface CardProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const Card = ({ children, title }: CardProps) => {
  return (
    <div className="card">
      <div className="card__title">{title}</div>
      <div className="card__content">{children}</div>
    </div>
  );
};

export default Card;
