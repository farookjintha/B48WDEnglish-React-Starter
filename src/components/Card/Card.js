import ChildA from '../ChildA/childA';
import './Card.css';

const Card = (props) => {
    return (
        <div className='card-container'>
            <h1>{props.product.name}</h1>
            <h2>Price: Rs.{props.product.price}</h2>
            <p>Category: {props.product.category}</p>
            {props.product.description && <p>Description: {props.product.description}</p>}
            {props.product.specification && <p>Specification: {props.product.specification}</p>}
            {props.product.offer && <p>Offer: {props.product.offer}</p>}
            <ChildA product={props.product} />
        </div>
    )
}


export default Card;