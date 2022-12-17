import { Routes, Route } from "react-router-dom";

import { Header } from "../components/Header";
import { LanguageBar } from "../components/LanguageBar";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";

export default function AppRoutes() {
  return (
    <>
      <LanguageBar />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  )
}