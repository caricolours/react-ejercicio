

const Card = (props) => {
  return (
    <div> 
    <img src={props.url} alt="" />
    <h3>{props.titulo}</h3>
    <p>{props.description}</p>
    </div>
  )
}

export default Card