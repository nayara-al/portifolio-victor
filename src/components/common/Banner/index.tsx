import { ReactNode } from "react";
interface IBanner {
  children: ReactNode
}
export const BannerBase = ({children}: IBanner) => {
  return (
    <div className="w-full p-16 bg-azul-escuro h-auto flex flex-col items-center justify-center gap-8">
      {children}
    </div>
  );
};
