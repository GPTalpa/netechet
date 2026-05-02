import { ReactNode } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import PopupLayer from "@/components/Quiz/PopupLayer";
import FreeGo from "@/components/Quiz/FreeGo";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <PopupLayer />
      <FreeGo/>
    </>
  );
}
