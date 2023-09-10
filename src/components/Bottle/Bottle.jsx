import './Bottle.css'

const Bottle = ({bottle}) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle-card">
            <h4>Name: {name}</h4>
            <img src={img} alt="" />
            <p>Price: {price}</p>
        </div>
    );
};

export default Bottle;