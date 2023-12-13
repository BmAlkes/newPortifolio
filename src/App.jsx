import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Home from "./components/home";
import Portfolio from "./components/portifolio";
import Qualification from "./components/qualification";
import ScrollUp from "./components/scrollup";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <ScrollUp />
    </>
  );
}

export default App;
