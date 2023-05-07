import './assets/css/App.css';

// importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';


function App() {
  var ButtonString ='Ver más';

  return (
    <div className="App">
      <Header />
      <Slider 
      title = "Bienvenido al master de framworks"
      btn ={ButtonString}
      />

      <div className='center'>
        <SeccionPruebas />

        <Sidebar />
        <div className='clearfix'></div>
      </div> {/* fin class center */}
      <Footer />
    </div>
  );
}

export default App;
