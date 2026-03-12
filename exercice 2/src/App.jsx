import { useState } from "react";

import StuffForm from "./components/StuffForm";
import StuffCard from "./components/StuffCard";

const INITIAL_STUFFS = [
  {
    name: "Banana",
    price: 54.5,
  },
  {
    name: "Computer",
    price: 100.5,
  },
  {
    name: "Table",
    price: 60,
  },
];

export default function App() {
  const [stuffs, setStuffs] = useState(INITIAL_STUFFS);

  const handleAddStuff = (name, price) => {
    console.log(`A new object named ${name}, price ${price}$ will be added to the list`);
    
    const newStuff = {
      name: name,
      price: price,
    };
    
    setStuffs([...stuffs, newStuff]);
  };

  return (
    <>
      <header>
        <h1>My Stuff</h1>
      </header>

      <StuffForm onSubmit={handleAddStuff}></StuffForm>

      <div className="stuff-list">
        {stuffs.map((stuff, index) => (
          <StuffCard key={index} name={stuff.name} price={stuff.price} />
        ))}
      </div>
    </>
  );
}
