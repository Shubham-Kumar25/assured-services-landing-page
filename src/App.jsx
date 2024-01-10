import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./page/LandingPage/LandingPage";
import ContactUsMain from "./components/ContactUsMain/ContactUsMain";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contactus" element={<ContactUsMain />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
