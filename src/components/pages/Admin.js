import { Route, Routes } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import Dashboard from "../Dashboard";

export default function Admin() {
    return (
        <AdminLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
        </AdminLayout>
    )
}