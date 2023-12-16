import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <h2> game </h2>
      <Header />
      <Sidebar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
