import MenuItems from "./MenuItems";

function Header(props)
{
  return(
   <dir>
    {/*<h1 style={{color:'red',backgroundColor:'black'}}>{props.title}</h1>*/}
    <h1 style={headerStyle}>{props.title}</h1>
    </dir>
  );
}

const headerStyle = {color:'red',backgroundColor:'black'}
export default Header;