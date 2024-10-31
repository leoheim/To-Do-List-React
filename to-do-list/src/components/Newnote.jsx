import React from 'react'

const Newnote = (props) => {

    function handleClick() {
        props.onDelete(props.id);
    }
  return (
    <div className='new-note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>Delete</button>
    </div>
  )
}

export default Newnote