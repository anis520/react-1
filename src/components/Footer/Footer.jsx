import './Footer.css'
import { FaFacebook, FaInstagram, FaKaaba, FaTwitterSquare } from "react-icons/fa";
function Footer() {
  return (
    
    <>
      <footer>
                <div className='div1'>
                   <p><span>Go</span> shop</p>
                    <p className="title">Products store</p>
                    <div className='div1'></div>
                    <div className='div2'></div>
                </div>
                <div className='div2'>
                    <h4>EXPLORE</h4>
                     <p>Home</p>
                     <p>Fesuted</p>
                     <p>New</p>
                     <p>Subiese</p>
                </div>
                <div className='div3'>
                    <h4>OUR SERVICE</h4>
                      <p>Pricing</p>
                      <p>Free shopping</p>
                      <p>Git Cards</p>
                </div>
                <div className='div4'>
                    <h4>FOLLOW</h4>
                      <p>
                        <FaFacebook></FaFacebook>
                        <FaTwitterSquare></FaTwitterSquare>
                        <FaInstagram></FaInstagram>
                      </p>
                </div>
      </footer>
    </>
  )
}

export default Footer