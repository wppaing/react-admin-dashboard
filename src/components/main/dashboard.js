import { Routes, Route } from "react-router-dom";

export default function DashBoard() {
  return (
    <Routes>
      <Route path="/" element={<h1>Dashboard</h1>} />
      <Route path="/customers" element={<h1>Customers</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  );
}
