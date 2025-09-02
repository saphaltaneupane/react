import Fruit from "./Fruit";


export default function Fruits() {
    // const fruits=["Apple","Banana","Mango","Orange"];
    const fruits=[{name:"Apple",price:10,emoji:"h", soldout:true},
    {name:"Banana",price:5,emoji:"🍌" , soldout:true},
    {name:"Mango",price:15,emoji:"🥭", soldout:false},
    {name:"Orange",price:8,emoji:"🍊" , soldout:true}
    ]

    return <>
        <ul>
            {fruits.map((fruit) => (
              <Fruit    key={fruit.name} name={fruit.name} price={fruit.price} emoji={fruit.emoji}   soldout={fruit.soldout}   />
            ))}
        </ul>

    </>
}