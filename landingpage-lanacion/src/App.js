import logo from './logo.svg';
import './App.css';
import MainCard from './components/Card';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <Header />
      <MainCard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
