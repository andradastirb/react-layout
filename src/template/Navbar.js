import { Link } from "react-router-dom";

export function Navbar() {
  const style = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "auto",
  };
  const margin = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "30%",
  };

  return (
    <div>
      <div style={style}>
        <h1>Navbar</h1>
        <div style={margin}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
