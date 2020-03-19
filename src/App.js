import React from 'react';
// import Timer from './hooks/'
// import Test from './higher-order-component'
// import Test from './optimizing-performance'
// import TestComponent from './React.Component'
// import {Counter,Counters} from './hooks/useState/index'
// import {TestUseEffect} from './hooks/useEffect/index'
// import {TestUseReducer} from './hooks/useReducer/index'
import TestCustomHooks from './hooks/custom-hooks/index'

function App() {
  return (
    <div className="App">

      {/* <Counter initialCount={0} />
      <hr/>
      <Counters initialCount={[0]}></Counters> */}

      {/* <TestUseEffect count={1}></TestUseEffect> */}
      {/* <TestUseReducer></TestUseReducer> */}
      <TestCustomHooks></TestCustomHooks>
    </div>
  );
}

export default App;
