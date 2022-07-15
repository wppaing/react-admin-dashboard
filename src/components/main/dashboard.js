import { Routes, Route } from "react-router-dom";
import Artists from "../artists";

export default function DashBoard() {
  return (
    <Routes>
      <Route path="/" element={<h1>Dashboard</h1>} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  );
}
