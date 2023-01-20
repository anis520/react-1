import { useParams } from 'react-router-dom'
import allProducts from '../../Faker/Faker'
import './Single.css'

function Single() {
  const {id}=useParams()
  const data =allProducts.find((a)=> a.id ==id)
  console.log(data);
  return (


     <>
 


    <div className='singlediv'>

         <img src={data.img} alt="" />
          <div className='pinfo'>
            <h3>{data.name}</h3>
            <p><span>Price </span>: {data.price} BDT</p>
            <p><span>category </span>: {data.gat}</p>
            <p><span>rating</span>: {data.rating}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi.</p>

          </div>


    </div>
      </>
  )
}

export default Single