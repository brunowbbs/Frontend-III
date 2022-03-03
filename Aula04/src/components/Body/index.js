import './styles.css'



import { Card } from '../Card'

import { comidas } from '../../data';

export default function Body() {
  return (
    <>
      <h1 className="title_home">Fast-Food House II</h1>

      <div className='container_card_home'>

        {
          comidas.map((item) => (
            <Card key={item.id} comida={item} />
          ))
        }


      </div>
    </>
  )
}