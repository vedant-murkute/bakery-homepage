import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./routes/About/About";
import { Contact } from "./routes/Contact/Contact";
import { Root } from "./routes/Root/Root";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}
