import React from 'react'

const button = (props) => {
    let btnClassName = null;
    switch(props.btnType) {
        case "success":
            btnClassName = "btn styled-button"
            break;
        case "info":
            btnClassName = "btn styled-button"
            break;
        case "danger":
            btnClassName = "btn styled-button"
            break;
        default:
            btnClassName = "btn styled-button"
    }
    let disableButton = props.disableButton ? props.disableButton : false
    return (
    <button disabled={disableButton}
        type="button" className={btnClassName} style={{marginLeft: "1rem"}}
        onClick={props.clickHandler}>{props.displayTitle}</button>
    )
}

export default button