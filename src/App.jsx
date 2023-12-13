import About from "./components/about";
import Header from "./components/header";
import Home from "./components/home";
import Portfolio from "./components/portifolio";
import Qualification from "./components/qualification";
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
      </main>
    </>
  );
}

export default App;
