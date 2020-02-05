import React from 'react'
import {Link} from 'react-router-dom'

const header = (props) => {
    return (
    <React.Fragment>
        <Link to="/" className={props.headerStyle? props.headerStyle:"page-header"}>
            {props.content}
        </Link>
        <br/><br/>
    </React.Fragment>
    )
}

export default header