 import'./Header.css'
 import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    
       <header>
           <div className="logo"><Link to='/'><span>Go</span> Shop</Link></div>
           <div className="menu">
 

                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/new">New</Link></li>
                    <li><Link to="/susribed">Suscribed</Link></li>
                </ul>

           </div>
           <div className="shop">
            <FaShoppingCart></FaShoppingCart>
           </div>
       </header>
    
    </>
  )
}

export default Header