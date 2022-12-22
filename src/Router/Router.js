import { Route, Routes, useNavigate } from "react-router-dom";
import AdminLayout from "../pages/AdminLayout";

function Router() {
  return (
    <Routes>
   <Route path="/admin" element={<AdminLayout />}></Route>
      <Route path="*" element={useNavigate("/admin")} />
    </Routes>
  );
}

export default Router;