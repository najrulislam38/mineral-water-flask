import PropTypes from 'prop-types'
import './Bottle.css'


const Bottle = ({bottle, purchaseHandler}) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle-card">
            <h4>Name: {name}</h4>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button className='purchase-btn' onClick={() => purchaseHandler(bottle)}>Make Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    purchaseHandler: PropTypes.func.isRequired
}

export default Bottle;