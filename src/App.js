import logo from './logo.svg';
import img from './img/Hello.JPG';
import Header from './components/Header';
import './App.css';

/*function Header()
{
  return(
    <>
    <h1>This message comes from header component.</h1>
    <h2>I am happy.</h2>
    </>
  );
}*/

/*const Header = () => {
  return(
    <h1>This message comes from header component.</h1>
  );
}*/


function App() {
  const name = "John";
  const x = false;
  return (
    <div className="App">
    <h1>Hello React</h1>
    <h2>Hello {name}</h2>
    <h2>{x ? 'Yes' : 'No'}</h2>
    <img src = {img}></img>
    <Header />
    </div>
  );
}

export default App;
