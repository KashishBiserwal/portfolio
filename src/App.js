import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
