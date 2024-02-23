import React from "react"
function Button(props){
    return (
        <div className="Chip-root makStyles-chipBlue-108 Chip-clickable">
            <span onClick={ props.handleClick } className="form-Chip-Label">
                {props.text}
            </span>
        </div>
    );
}
export default Button;