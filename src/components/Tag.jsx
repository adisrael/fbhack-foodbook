import React from 'react'

const style = {
    backgroundColor: '#c7c7c7',
    display: 'inline-block',
    border: 'solid #7e7d7d',
    borderRadius: '5px',
    padding: '5px',
    margin: '5px'


}

const x = {
    marginLeft: '5px'
}

export default function Tag(props) {
  return (
    <div style={style}>
      <span>{props.title}<span onClick={()=>{props.deleteHandler(props.title)}} style={x} className="close">x</span></span>
    </div>
  )
}
