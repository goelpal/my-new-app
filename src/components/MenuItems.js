import "./MenuItems.css";

function MenuItems(props){
    return(
        <ul>
            <li><a href="index.html" target="_blank">{props.item1}</a></li>
            <li><a href="">{props.item2}</a></li>
            <li><a href="">{props.item3}</a></li>
        </ul>
    );
}

export default MenuItems;