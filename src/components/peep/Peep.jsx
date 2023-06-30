import React from 'react'

const Peep = ({peep}) => {
  return(
    <div className="peep" data-cy="peep">
      <div className="handle">{peep.user.handle}</div>
      <div className="body">{peep.body}</div>
      <br/>
    </div>
    )
}

export default Peep