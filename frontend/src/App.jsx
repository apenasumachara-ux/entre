import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/create-user" element={<CreateUser />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;