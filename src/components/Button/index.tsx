import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
}
export default function Button({ children }: IButton) {
  return <button className="px-4 py-2 bg-verde-android rounded-xl">{children}</button>;
}
