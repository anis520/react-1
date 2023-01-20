 import { Link } from 'react-router-dom'
import   './Catagories.css'

function Catagories() {
  return (
    <div className='cat'>
         


      <div className="div1">
        <img src="https://t4.ftcdn.net/jpg/03/02/94/15/360_F_302941586_ImPMo46QobjvcoKqbjGW093h6quYdBHm.jpg" alt="" />
         <div>
            <h2>Travel</h2>
         <h4>Bag packs</h4>
         <Link to="/shop/bag">
         <p>Veiw now</p>
            
         </Link>
         
         </div>
      </div>
      <div className="div1">
       
      <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9bfb1df16df246c59898ae1900dd6806_9366/ORION_SHOES_White_EX2216_01_standard.jpg" alt="" />
         <div>
            <h2>Sports</h2>
         <h4>Shoes</h4>
         <Link to="/shop/shoes">
         <p>Veiw now</p>
            
         </Link>
         
         </div>
      </div>
    </div>
  )
}

export default Catagories