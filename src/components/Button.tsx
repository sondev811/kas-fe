import React from "react";
import "@styles/Button.css";

interface Props {
  type: "button" | "link";
  buttonName: string;
  onClick?: () => void;
  customStyle?: {};
  size?: "large" | "normal" | "small";
  rounded?: "rounded" | "half";
  darkText?: boolean;
  href?: string;
  icon?: JSX.Element;
  extendsClass?: string;
}

const types = {
  button: "button",
  link: "link",
};

const sizes = {
  large: "button-large",
  normal: "button-normal",
  small: "button-small",
};

const borderRadius = {
  rounded: "button-rounded",
  half: "button-half-rounded",
};

const Button: React.FC<Props> = (props) => {
  const {
    type,
    buttonName,
    onClick = () => {},
    customStyle,
    size,
    rounded,
    darkText,
    href,
    icon,
    extendsClass,
  } = props;
  return type === types.button ? (
    <button
      type="button"
      className={`button ${size ? sizes[size] : sizes.normal} ${
        rounded ? borderRadius[rounded] : null
      } ${darkText ? "button-text-dark" : null} ${extendsClass}`}
      style={customStyle}
      onClick={() => onClick()}
    >
      {icon ? <span className="button-icon">{icon}</span> : null}
      {buttonName}
    </button>
  ) : (
    <a
      href={href ? href : ""}
      className={`button ${size ? sizes[size] : sizes.normal} ${
        rounded ? borderRadius[rounded] : null
          } ${darkText ? "button-text-dark" : null}`}
        target="_blank"
        rel="noreferrer"
      style={customStyle}
    >
      {
        icon && <span className="button-icon">{icon}</span>
      }
      {buttonName}
    </a>
  );
};

export default Button;
