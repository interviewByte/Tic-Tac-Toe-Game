import React from "react";
import Typewriter from 'typewriter-effect';
import "../component/effect.css";
function Effect () {
    return (
        <div className="effect">
           <Typewriter
             options={{
             strings: "Welcome to play Tic Tac Toe Game",
             autoStart: true,
             loop: true,
            }}
         />
        </div>
    )
}
export default Effect;