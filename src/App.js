
import './App.css';
import Designer from './Components/Designer';
import Footer from './Components/Footer';
import Playstore from './Components/Playstore';
import Properties from './Components/Properties';
import Section1 from './Components/Section1';
import TopRated from './Components/TopRated';

function App() {
  return (
    <div className="App">
      <Section1 />
      <Properties />
      <Designer />
      <TopRated />
      <Playstore />
      <Footer />
    </div>
  );
}

export default App;
