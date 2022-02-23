import './App.css';
import Header from './components/Header';
// import ViewCounter from './components/ViewCounter';
import Pizza from './components/Pizza';

const App = () => {
  return (
    <div className="App">
      <Header heading={`Welcome to Pat's Pizza Place`} evenMoreStuff="fun stuff" />
      {/* <ViewCounter /> */}
      <Pizza />

      {/* <Button label="click me!"/> props.label
      <Button>Click me!</Button> props.children */}
    </div>
  );
};

export default App;
