import { Link } from 'react-router-dom'
import Title from '../../Title/Title'
import { FaEye } from "react-icons/fa";
import'./Shop.css'
import allProducts from '../../Faker/Faker';
let items=allProducts
function Shop({products,title}) {
    {products ? items=products:items=allProducts}
    return (
        <>
   <Title title={title}/>
   <div className="products">

      {items.map(item =>(

<div className='shopitem'>
                   <img src={item.img} alt="" />
                   <p><span>Name</span>: {item.name}</p>
                    <p><span>Price</span>: {item.price} BDT</p>
                    <Link to={`/single/${item.id}`}><FaEye></FaEye> Veiw now</Link>
            </div>


      ))}
            



   </div>
    </>
  )
}

export default Shop