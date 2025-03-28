import React, { useReducer } from 'react'
import Hello from './Hello';

const App = () => {


      let reducer =(state,action)=>{

        if(action.type=="increment")
        {
          return state+1
        }
        else if(action.type=="decrement")
        {
          return state- 1;
        }
        else if(action.type=="reset")
        {
          return 0;
        }

      }
     let [count, dispatch] = useReducer(reducer,0)
  return (
    <div className='outer'>
          <h1 style={{textAlign:"center"}}> useReducer Example</h1>

       <div className="inner">

          <h2> count is : {count}</h2>
          <button onClick={()=>dispatch({type:"increment"})}> increment</button>
          <button onClick={()=>dispatch({type:"decrement"})}> decrement</button>
          <button onClick={()=>dispatch({type:"reset"})}> reset</button>

          <Hello/>
       </div>

    </div>
  )
}

export default App