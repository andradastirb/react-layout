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
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Reddd");

  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Template />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h3>This page is not available!</h3>} />
      </Route>
    )
  );

  return (
    <div className="App">
      {/* <p>Hello</p> */}
      <AppContext.Provider value={{ userName, setUserName }}>
        <RouterProvider router={myRouter} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
