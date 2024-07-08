import React from 'react';
import { counterReducer } from './counterReducer';

function App() {
  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });

  return (
    <div id="app">
      <h1>The Counter</h1>
      <p id="actions">
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </p>
      <p id="counter">{state.count}</p>
    </div>
  );
}

export default App;
