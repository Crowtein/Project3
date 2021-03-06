import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Application from "./Application";
import { createStore } from 'redux'




const store = createStore(counterReducer);

function counterReducer(state, action){
  if(typeof state === 'undefined'){
    return 0;
  };
  if(action.type === 'INCREMENT_TIMER'){
    return state + 1;
  }
  return state;
}

setInterval( function() {
   console.log('increment timer')
   store.dispatch({
     type : 'INCREMENT_TIMER'
   })
}, 1000 )

store.subscribe( function() {
    const totalSecondsPassed = store.getState(),
           totalMinutesPassed = Math.floor(totalSecondsPassed/60),
           hours = Math.floor(totalMinutesPassed/60),
           minutes = totalMinutesPassed % 60,
           seconds = totalSecondsPassed % 60;
  
   document.getElementById("timer").innerHTML = `${hours} hours ${minutes} minutes ${seconds} seconds`
    
})


ReactDOM.render (
  
    <Application/>,

    document.getElementById("container")

  
);
