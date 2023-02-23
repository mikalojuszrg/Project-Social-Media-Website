import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import { buttonClassNames } from "../../consts/buttonClassNames";

const cn = classNames.bind(styles);

interface props {
  children: ReactNode;
  onClick?: () => void;
  type?: string;
  variant: string;
}

const Button: React.FC<props> = ({ children, variant, onClick }) => {
  const classes = buttonClassNames[variant];
  return (
    <button className={cn(...classes)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
