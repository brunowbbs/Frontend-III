import './styles.css'

export function Card(props) {
  return (
    <div className="card_home_item">
      <img src={props.comida.image} className="image_card" />
      <h1 className='item_card_title'>{props.comida.title}</h1>
      <p>{props.comida.description}</p>
    </div>
  )
}