import React from 'react'


export default (props) => {
    return (
        <div className={props.selected ? 'highlighted' : null}>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
            <button onClick={() => props.handleClick(props.id)}>Click Me</button>
        </div>
    )
}
