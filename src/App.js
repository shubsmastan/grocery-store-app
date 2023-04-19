import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./components/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import "./App.css";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
