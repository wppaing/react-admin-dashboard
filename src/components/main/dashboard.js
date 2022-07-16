import { Routes, Route } from "react-router-dom";
import Albums from "../albums";
import Artists from "../artists";

export default function DashBoard() {
  return (
    <Routes>
      <Route path="/" element={<h1>Dashboard</h1>} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/albums" element={<Albums />} />
    </Routes>
  );
}
