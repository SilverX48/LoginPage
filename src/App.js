import './App.css';
import BrandHeader from './Components/BrandHeader/BrandHeader';
import Cards from './Components/Cards/Cards';
import CardHolder from './Components/Cards/CardHolder';
import Login from './Components/Login/Login';

function App() {
  return (
    <section className="fondo">
      <BrandHeader></BrandHeader>
      <section className="login">
        <Login></Login>
      </section>
      <CardHolder>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </CardHolder>
    </section>
  );
}

export default App;
