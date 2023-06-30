const Peep = ({peep}) => {
  return(
    <div>
      <div>{peep.user.handle}</div>
      <div>{peep.body}</div>
      <br/>
    </div>
    )
}

export default Peep