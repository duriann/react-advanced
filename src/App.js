import React from 'react';
// import Timer from './hooks/'
// import Test from './higher-order-component'
// import Test from './optimizing-performance'
// import TestComponent from './React.Component'
import {Counter,Counters} from './hooks/useState/index'

function App() {
  return (
    <div className="App">
      <Counter initialCount={0} />
      <hr/>
      <Counters initialCount={[0]}></Counters>
    </div>
  );
}

export default App;
