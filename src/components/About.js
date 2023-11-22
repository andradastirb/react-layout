import { useContext } from "react";
import { AppContext } from "../App";

export function About() {
  const { userName, setUserName } = useContext(AppContext);

  const changeName = (event) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <h2>About</h2>
      <p>{userName}</p>
      <input type="text" onChange={changeName} />
    </>
  );
}
