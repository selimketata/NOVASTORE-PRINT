import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import Presentation from "./pages/Presentation/Presentation";
import Services from "./pages/Services/Services";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";


import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
