import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";
import Create from "./components/Create";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/update/:id" element={<UpdateUser />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default App;
