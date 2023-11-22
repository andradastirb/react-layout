import { useContext } from "react";
import { AppContext } from "../App";

export function Contact() {
  const { userName: name } = useContext(AppContext);
  return (
    <>
      <h2>Contact</h2>
      <div>{name}</div>
    </>
  );
}
