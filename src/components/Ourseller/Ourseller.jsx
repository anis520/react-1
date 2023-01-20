import './Ourseller.css'
import { SiAcer, SiAdidas, SiAmazonaws, SiAudible, SiCaterpillar, SiJeep } from "react-icons/si";
function Ourseller() {
  return (
    <div className='seller'>



          <h4>Our sellers</h4>
          <p>boost brand awareness and raise profit margins</p>
          <p className='icon'>
            <SiAdidas></SiAdidas>
            <SiJeep></SiJeep>
            <SiAcer></SiAcer>
            <SiAmazonaws></SiAmazonaws>
            <SiAudible></SiAudible>
            <SiCaterpillar></SiCaterpillar>
          </p>





    </div>
  )
}

export default Ourseller