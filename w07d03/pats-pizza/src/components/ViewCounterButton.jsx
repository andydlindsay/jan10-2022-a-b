const ViewCounterButton = (props) => {
  console.log(props);

  return (
    <div>
      <h2>ViewCounterButton</h2>
      <button
        onClick={props.clickHandler}
      >Click me!</button>
    </div>
  );
};

export default ViewCounterButton;