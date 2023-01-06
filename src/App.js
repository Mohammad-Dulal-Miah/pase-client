import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarExtra from './components/Navbar/Navbar';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';

function App() {
  return (
    <div classNameName='app'>
     <NavbarExtra></NavbarExtra>
     <Categories></Categories>
     <Products></Products>
    </div>
  );
}

export default App;
