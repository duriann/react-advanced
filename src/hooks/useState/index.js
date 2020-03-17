import React, { useState } from 'react'

export {Counter,Counters}

function Counter({initialCount}){
  const [count, setCount] = useState(initialCount)

  return (
    <>
      Count: {count}
      <button onClick={()=>setCount(initialCount)}>reset</button>
      <button onClick={()=>setCount((count)=>count+1)}>+</button>
      <button onClick={()=>setCount((count)=>count-1)}>-</button>
    </>
  )
}

//这个initialCount是数组
function Counters({initialCount}){
  const [count, setCount] = useState(initialCount)
  console.log('count',count);
  return (
    <>
      Count: {count.join()}
      <button onClick={()=>setCount(initialCount)}>reset</button>
      <button onClick={()=>setCount((count)=>{
        return [...count,count[count.length-1]+1]
      })}>+</button>
      <button onClick={()=>setCount((count)=>{
        // console.log('count button',count)
        // let res = (count.splice(count.length-1,1),count)
        // console.log('res',res)
        //这里需要返回一个新的数组
        return count.slice(0,count.length-1)
      })}>-</button>
    </>
  )
}