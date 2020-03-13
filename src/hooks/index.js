import React,{useState,useEffect} from 'react'

function MyFragment(props){
  return null
}

export default function Timer (){
    let [on,setOn] = useState(false)
    let [time,setTime] = useState(0)

    useEffect(()=>{
      if(time>=5){
        return
      }
      let timeId
      if(on){
        timeId  = setInterval(() => {
          console.log('time',time);
          setTime(time+1)
        }, 1000);
      }
      return ()=>{
        console.log('卸载。。。',timeId,time);
        clearInterval(timeId)
      }
    },[on,time])

    return <div>
      {console.log('render...',time)}
      {time}
      {!on && <button onClick={()=>setOn(true)}>开始</button>}
      {on && <button onClick={()=>setOn(false)}>暂停</button>}

      <MyFragment>
        dads
      </MyFragment>
    </div>
}