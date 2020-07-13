import React, {useState} from 'react';  //import a variable
import Fly from './fly.js';
import {Message} from './Message';

function App() {
  let [count, setCount] = useState(1) //hook of use state
  /* above var applied on hook useState(0) 

     - count = has default value of variable
     - setCout > setter of variable placed in count
        and is updated like counter based on count
 
      - Role of this  let [count, setCount] = useState(1) ???
        can initilize the JS var.s using hook in Functional component

      - hook can't use in class
        */


  return(
    <div className='App'>
      {/* <h1>change</h1> */}
      <Fly flyQuote='bird'/>
      <hr/>
      <Fly flyQuote='baloon'/>

      <h3>Value of counter variable is: {count}</h3>
      <button onClick = {
        //arrow function is anonymous fun
        // ()=>alert('button process')
        () => setCount(++count) 
        // it cant be save ,move to initial state every time browser referesf
        // if want to save , use ocally or save in DB  
        }>Update Counter 
      </button>
      <Message counter={count}/>
    </div>
  );
}

/*- component which export default , no needs {}
    without default export, should use {} around name
  
    - only 1 component can export from 1 file, 
    as each file created for single component
*/
export default App; 


//original DOM > can see at browser
/*virtualDOM or ShadowDOM > proxay layer infront of originalDOM
  our code written in it. 
  can't render till tranform nto originalDOM. 

  When to render virtualDOM to originalDOM?
  Events used for it, in react "Hooks upto 16.8v onwrds"

  Hooks: can declear into functions also, before 16.8 we need to decear in clas

  -useState: one of hooks 
*/

/* Global state concept
  There are 2 ways 
  1- use REDUX an external library
  2- use  Context API
*/