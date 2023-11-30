import Contact from "./components/Contact/contact";
import Expertise from "./components/Expertise/expertise";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Skills/>
    <Works/>
    <Expertise/>
    <Contact/>
    <ToastContainer/>
    <Footer/>
    </div>
  );
}

export default App;
