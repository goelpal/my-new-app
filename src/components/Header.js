import MenuItems from "./MenuItems";

function Header()
{
  return(
   <dir>
    <h1>This message comes from header component</h1>
    <MenuItems />
    </dir>
  );
}

export default Header;