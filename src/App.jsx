import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;