import { Routes, Route } from "react-router-dom";

import { Header } from "../components/Header";
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  )
}