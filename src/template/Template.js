import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function Template() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <p>Footer</p>
    </div>
  );
}
