import React, { useState } from "react";
import Square from "./Square";
import '../component/board.css'
import Effect from "./Effect";
function Board () {
  // Array for 9 click places
  const [state, setState] = useState(Array(9).fill(null))
  // set click value eithe X || O
  const [turn, setTurn] = useState(true);
  let count =0;
  // generate answer
  const checkWinner = () =>{
    const winnerIndex = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i of winnerIndex){
      const [a,b,c] = i;
      if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
        return state[a];
      }
    }
    for(let i =0; i<state.length;i++){
      if(state[i]==='X'||state[i]==='O'){
        count++;
      }
    }
    return false;
  };
  const isWinner = checkWinner();
  // handel click of the Box
  const handelClick = (index)=>{
    const copyState = [...state];
    if(copyState[index]!=="X" && copyState[index]!=="O" && isWinner!=='X'&&isWinner!=='O'){
      copyState[index]=turn?"X":"O";
      setState(copyState);
      setTurn(!turn)
    }
  }
  // Re-start the game
  function handelReset(){
    setState(Array(9).fill(null));
    setTurn(true)
  }
   return (

      <div className="board-container">
        <Effect />
        <div className="board-row">
          <Square onClick={()=>handelClick(0)} value={state[0]}/>
          <Square onClick={()=>handelClick(1)}  value={state[1]}/>
          <Square onClick={()=>handelClick(2)}  value={state[2]}/>
        </div>
        <div className="board-row">
          <Square onClick={()=>handelClick(3)}  value={state[3]}/>
          <Square onClick={()=>handelClick(4)}  value={state[4]}/>
          <Square onClick={()=>handelClick(5)}  value={state[5]} />
        </div>
        <div className="board-row">
          <Square onClick={()=>handelClick(6)}  value={state[6]}/>
          <Square onClick={()=>handelClick(7)}  value={state[7]}/>
          <Square onClick={()=>handelClick(8)}  value={state[8]}/>
        </div>
        {
          isWinner?(
                 <div className="msg">{isWinner} won the game <button onClick={handelReset}>Restart Game</button></div>
                ):
          count===9?(
                 <div className="msg">Draw Game!<button onClick={handelReset}>Restart Game</button></div>
                 ):""
        }
      </div>
   )
}
export default Board;
