import {useState} from 'react';
import ViewCounterButton from './ViewCounterButton';
import ViewCounterDisplay from './ViewCounterDisplay';

const ViewCounter = (props) => {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    // setCounter(counter + 1); // 1
    // setCounter(counter + 1); // 2
    // setCounter(counter + 1); // 3
    // setCounter(setCounter(setCounter(counter+1)+1)+1);

    setCounter((prevCounter) => { // 0
      return prevCounter + 1;
    });
    setCounter((prevCounter) => { // 1
      return prevCounter + 1;
    });
    setCounter((prevCounter) => { // 2
      return prevCounter + 1;
    });
  };

  return (
    <div>
      {/* { props.children } */}
      {/* <h2>View Counter: {counter}</h2> */}
      <ViewCounterDisplay counter={counter} />
      {/* <button onClick={clickHandler}>Click Me!</button> */}
      <ViewCounterButton clickHandler={clickHandler} selected />
    </div>
  );
};

export default ViewCounter;
