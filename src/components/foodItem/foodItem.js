import './foodItem.css';
import Button from '../button/button'

function FoodItem (props) {
    return (
        <div className='itemContainer'>
            <img
                id='itemImage'
                src={props.imageSrc}
                alt={props.imageAlt}
            ></img>
            <h2>
                {props.itemName}
            </h2>
            <p id='itemDescription'>
                Quantity: {props.quantity}<br/>
                Description: {props.foodDescription}
            </p>
            <div id='reserveButton'>
                <Button variant='primary' size='m'>Reserve</Button>
            </div>
        </div>
    )
}

export default FoodItem