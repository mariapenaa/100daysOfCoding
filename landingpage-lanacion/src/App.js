import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
