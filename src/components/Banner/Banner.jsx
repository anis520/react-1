import './Banner.css'
import banner from'../img/banner1.webp'
function Banner() {
  return (
    <div>
         <div className="info">
             <h2>Best offer going on</h2>
              <a className='a' href='#top'>Veiw now</a>
         </div>
        <img  src={banner} alt="" />
    </div>
  )
}

export default Banner