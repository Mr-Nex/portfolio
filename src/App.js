import { useContext } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Toggle from "./components/Toggle";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#24292d" : "white",
        color: darkMode && "white",
      }}
    >
    <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area : 900
            }
          },
          shape: {
            type : "square",
            stroke : {
              width : 6,
              color : "#34d8ba"
            }
          }
        },
      }}
    />
    <Toggle />
    {/* <Navbar /> */}
    <Header />
    <About />
    <Timeline />
    <Projects />
    <Contact />
    </div>
  );
}

export default App;
