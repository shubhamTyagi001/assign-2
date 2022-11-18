import { useState } from 'react';
import './App.css';

function App() {
  const[sum,setSum] = useState(0);
  const[num,setnum] = useState(1000000000000000);
  function change(e){
     let val = e.target.value;
     setnum(val)
  }
 function update(){
  if(num>0){
    let count =0;
    for(let i=1;i<=num;i++){
      count+=i;
    }
    
    setSum(count)
    setnum(' ');
  }
 }
  return (
    <div className="App">
     <h1>Sum-{sum}</h1>
     <input type='number' onChange={change}/><br/>
     <p>{(num>=1)?<span></span>:<span>pelase enter number greater than 0</span>}</p>
     <button onClick={update}>calculate sum</button>
    </div>
  );
}

export default App;
