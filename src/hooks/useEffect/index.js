import React, { useState, useEffect } from "react";

function TestUseEffect(props) {
  const [count, setCount] = useState(props.count);
  const [color,setColor] = useState('#000000')

  useEffect(() => {
    console.log("useEffect");
    const spanEle = document.querySelector("#count");
    spanEle.innerText = count;
  },[count]);

  return (
    <div>
      <span id="count"></span>
      <span style={{background: color}}>{color}</span>
      <button onClick={()=>setColor('#'+parseInt(Math.random()*1000000))}>改变颜色</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
    </div>
  );
}
export { TestUseEffect };
