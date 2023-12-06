let MenuItems = (props) => {
    return(
        <li>{props.info}</li>
    )
}

function MyMenu(){
    return(
        <ul>
            <MenuItems info="Home" />
            <MenuItems info="About" />
            <MenuItems info="Product" />
        </ul>
    )

}

export default MyMenu;