import {useState} from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState({
    toppings: [],
    crustType: 'stuffed'
  });

  // const [toppings, setToppings] = useState([]);
  // const [crustType, setCrustType] = useState('stuffed');
  const [newTopping, setNewTopping] = useState('');

  const addTopping = () => {
    // take the input from the field and "push" it into our toppings array
    // setToppings([
    //   ...toppings,
    //   newTopping
    // ]);

    setPizza({
      ...pizza,
      toppings: [
        ...pizza.toppings,
        newTopping
      ]
    });

    // setPizza((prevPizza) => {
    //   return {
    //     ...prevPizza,
    //     toppings: [
    //       ...prevPizza.toppings,
    //       newTopping
    //     ]
    //   };
    // });

    setNewTopping('');
  };

  const mappedToppings = pizza.toppings.map((topping, index) => {
    return <p key={index}>{topping}</p>
  });

  const updateCrustType = (event) => {
    setPizza({
      ...pizza,
      crustType: event.target.value
    });
  };

  return (
    <div>
      <h2>Create your own pizza!</h2>

      <div>
        <h2>Crust: {pizza.crustType}</h2>
        <label>Crust Type:</label>
        <input 
          value={pizza.crustType}
          onChange={updateCrustType}
        />
      </div>

      <div>
        <label>New topping:</label>
        <input 
          value={newTopping}
          onChange={(event) => { setNewTopping(event.target.value) }}
        />
        <button onClick={addTopping}>Add to pizza!</button>
      </div>

      <div>
        {/* { toppings.map((topping) => {
          return <p>{topping}</p>
        }) } */}
        { mappedToppings }
      </div>
    </div>
  );
};

export default Pizza;
