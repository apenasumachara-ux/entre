import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/users"
          element={<Users />}
        />

        <Route
          path="/create-user"
          element={<CreateUser />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;