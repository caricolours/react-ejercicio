import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header.jsx';
import Card from './Card';
import Footer from './Footer.jsx';
import foto1 from './asets/foto1.jpg';
import foto2 from './asets/foto2.jpg';
import foto3 from './asets/foto3.jpg';

function App() {
  return (
    <div className="App">
      
        
        
        <Header></Header>
        <Card url={foto1} titulo="Martin Pescador" description="Pájaro"></Card>
        <Card url={foto2} titulo="Bebé Elefante" description="Abrevadero"></Card>
        <Card url={foto3} titulo="Tigre" description="Carnívoro"></Card>
        <Footer></Footer>
      
    </div>
  );
}

export default App;
