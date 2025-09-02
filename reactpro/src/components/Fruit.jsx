function Fruit({name,price,emoji,soldout}) {
    return (
        // <li>{emoji} {name} - ${price}</li>
        <>
          <li>
            {name} {emoji} {price} {soldout? "Sold Out": ""}
          </li>
        </>
       
    );
}
        export default Fruit;