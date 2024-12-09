import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("white")


  return (
    <>
    <div className='div1' style={{backgroundColor:color}}>
      <h1 className='h1'>Background colour changer</h1>
    </div>
    <div className='div2'>
      <div className='div3'style={{backgroundColor:color}} >

      </div>
      <button onClick={()=>setColor("red")} className='red'>red</button>
      <button  onClick={()=>setColor("blue")} className='blue'>blue</button>
      <button  onClick={()=>setColor("green")} className='green'>green</button>
      <button onClick={()=>setColor("yellow")} className='yellow'>yellow</button>
      <button onClick={()=>setColor("orange")} className='orange'>orange</button>
    </div>
    </>
  )
}

export default App
