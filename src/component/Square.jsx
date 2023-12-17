import React from "react";
import "./square.css"
function Square (props) {
    const style = {
        color: "red",
        background: "linear-gradient(to right, #009FFD, #5a5ab7)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent"
      };
    return (
        <div
         onClick={props.onClick}
         style={{
            height:'80px',
            width:'80px',
            display:'flex',
            margin:'10px',
            fontFamily:'sans-serif',
            fontWeight:"700",
            fontSize:'70px',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:'5px',
            boxShadow:'10px 10px 8px #888888',
            border:'none',
            // background:'#bdc3c7',
            background:"#f5f6fa"

        }} className="square">
            {/* <h5 className="gradient-text" {(props.value)==="X"?style={{style}}:style={{color:"green"}}} >{props.value}</h5> */}
            <h5 className="gradient-text" style={(props.value) === "X" ? style : {color: "#FF8822",borderRadius:"50%"}}>{props.value}</h5>

        </div>
    )
}
export default Square;