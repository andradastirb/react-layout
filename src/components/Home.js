import { useContext } from "react";
import { AppContext } from "../App";

export function Home() {
  const { userName: name } = useContext(AppContext);

  return (
    <>
      <h2>Home</h2>
      <div>{name}</div>
    </>
  );
}
