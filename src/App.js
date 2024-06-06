import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Experience from "./components/experience";
import Tech from "./components/tech";
import Work from "./components/work";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/start";

export default function App() {
  return (
    <BrowserRouter>
      <div className=" z-0 relative text-white bg-primary">
        <div className="bg-bgImage bg-no-repeat bg-center bg-cover">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Work />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}