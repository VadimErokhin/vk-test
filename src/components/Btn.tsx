import { ReactNode } from "react";

interface BtnProps {
  type: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
}

export function Btn(props: BtnProps) {
  return <button className={`btn ${props.type}`} type={props.type}>{props.children}</button>;
}
