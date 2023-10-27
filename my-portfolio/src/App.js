import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
// import Header from "./components/Header/header";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
    <Navbar/>
    <Intro/>
    <Skills/>
    <Works/>
    </div>
  );
}

export default App;
