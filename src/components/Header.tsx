import "../styles/header.scss";

interface IHeaderProps {
  title: string;
}

export function Header({ title }: IHeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {title}</span></span>
    </header>
  );
}