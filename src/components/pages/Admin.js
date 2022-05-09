import { Route, Routes } from "react-router-dom";
import AdminLayout from "../AdminLayout";
import Dashboard from "./Dashboard";
import AdminGallery from "./AdminGallery";
import AdminReview from "./AdminReview"
import AdminMessage from "./AdminMessage"
import AdminReservation from "./AdminReservation"
import EventsImages from "./EventsImages";

export default function Admin() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="review" element={<AdminReview />} />
        <Route path="message" element={<AdminMessage />} />
        <Route path="reservation" element={<AdminReservation />} />
        <Route path="gallery/images" element={<EventsImages />} />
      </Routes>
    </AdminLayout>
  );
}
