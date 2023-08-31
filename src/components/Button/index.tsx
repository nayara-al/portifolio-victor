import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  buttonType: "primary" | "secondary";
  buttonColor: "verde" | "azul"
}
export default function Button({ children, buttonType, buttonColor }: IButton) {
  let bg = "bg-verde-android";
  let rounded = "rounded-xl"
  let paddingX = "px-4"
  let paddingY = "py-2"
  let colorLetter = "text-azul-escuro"
  if (buttonType == "primary") {
    rounded = "rounded-xl"
    paddingX = "px-4"
    paddingY = "py-2"
  } else {
    rounded = "rounded-2xl"
    paddingX = "px-3"
    paddingY = "py-1"
  }

  if (buttonColor == "verde") {
    bg = "bg-verde-android"
    colorLetter = "text-azul-escuro"
  } else {
    bg = "bg-azul-claro"
    colorLetter = "text-white"
  }
  return (
    <button className={`${paddingX} ${paddingY} ${bg} ${rounded} ${colorLetter}`}>
      {children}
    </button>
  );
}
