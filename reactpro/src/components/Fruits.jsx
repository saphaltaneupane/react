import Fruit from "./Fruit";


export default function Fruits() {
    // const fruits=["Apple","Banana","Mango","Orange"];
    const fruits=[{name:"Apple",price:10,emoji:"h"},
    {name:"Banana",price:5,emoji:"🍌"},
    {name:"Mango",price:15,emoji:"🥭"},
    {name:"Orange",price:8,emoji:"🍊"}
    ]

    return <>
        <ul>
            {fruits.map((fruit) => (
              <Fruit    key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji} />
            ))}
        </ul>

    </>
}