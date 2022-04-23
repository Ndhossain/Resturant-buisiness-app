import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Admin from "./pages/Admin"


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="reservation" element={<Reservation />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="gallery" element={<Gallery />} />
          </Routes>
        </Layout>
        <Routes>
          <Route path="iamtheAdmin" element={<Admin />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
