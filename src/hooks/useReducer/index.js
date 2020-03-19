import React, { useReducer } from 'react'


//const [state, dispatch] = useReducer(reducer, initialArg, init);

const initState = {
  count: 0
}

function countReducer(state,action){
  console.log('action',action);
  switch(action.type){
    case 'add':
      return {
        ...state,
        count: state.count + 1
      }
    case 'add2':
      return {
        ...state,
        count: state.count + action.payload
      }  
    case 'minus':
      return {
        ...state,
        count: state.count - 1
      } 
  }
}

function TestUseReducer(){
  const [state,dispatch] = useReducer(countReducer,initState)

  return (
    <div> 
        <span>{state.count}</span>
        <button onClick={()=>dispatch({type: 'add'})}>add</button>
        <button onClick={()=>dispatch({type: 'add2',payload: 2})}>add2</button>
        <button onClick={()=>dispatch({type: 'minus'})}>minus</button>
    </div>
  )
}

export {
  TestUseReducer
}