import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Layout>
        <Routes>

          <Route path="/" element={<Home />}/>
        
        </Routes>
      </Layout>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
