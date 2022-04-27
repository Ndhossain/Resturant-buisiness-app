import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Review from "./pages/Review";

export default function Customar() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="review" element={<Review />} />
      </Routes>
    </Layout>
  );
}
