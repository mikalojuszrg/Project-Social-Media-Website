import { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClick: () => void;
}

const Button: React.FC<props> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
