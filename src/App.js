import logo from './logo.svg';
import img from './img/Hello.JPG';
import Header from './components/Header';
import './App.css';
import MyMenu from './components/MyMenu';
import MenuItems from './components/MenuItems';
import {useState} from 'react';
import Counter from './components/Counter';


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
  const[data,setData] = useState("React is fun");

  function handleClick(){
    setData("This is another value");
  }

  const name = "John";
  const x = false;
  return (
    <div className="App">
      <MenuItems item1="Hem" item2="Om Oss" item3="Produkter"/>
    <Header title="Hello React" />
    <h3>This line is for testing.</h3>
    <MyMenu />
    {data}
    <button onClick={handleClick}>Click me</button>
    <Counter />
    </div>
    
  );
}

export default App;
