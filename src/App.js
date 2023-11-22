import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Template } from "./template/Template";

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Template />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h3>This page is not available!</h3>} />
      </Route>
    )
  );

  return (
    <div className="App">
      {/* <p>Hello</p> */}
      <RouterProvider router={myRouter} />
    </div>
  );
}

export default App;
