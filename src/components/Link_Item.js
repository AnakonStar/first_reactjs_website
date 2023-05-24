import '../App.css';

function Link_Item(props) {
    return (
        <li>
            <a href={props.link}>
                <span>
                    <img src={props.img} alt="facebook"/>
                    <p>{props.title}</p>
                </span> 
            </a>
        </li>
    );
}

export default Link_Item;
