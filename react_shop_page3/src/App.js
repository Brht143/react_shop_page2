import logo from './logo.svg';
import image from './cookies.jpg'
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Cookies from './Cookies';
import Products from './Products';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookies</h1>
        <p>The most delecious cookies</p>
        <img className="cookies" src={image}></img>
        <div>
          <Products />
        </div>
      </header>
    </div>
  );
}

export default App;
