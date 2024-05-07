import dining from '../assets/dining.jpg'
import living from '../assets/living.jpg'
import bedroom from '../assets/bedroom.png'

function Ranges(){
    return (
        <div className="range">
            <h1>Browse the Range</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="gallery">
                <div className="dining">
                    <img src={dining} alt="Dining room" />
                    <p>Dining</p>
                </div>
                <div className="living">
                    <img src={living} alt="" />
                    <p>Living</p>
                </div>
                <div className="bedroom">
                    <img src={bedroom} alt="" />
                    <p>Bedroom</p>
                </div>
            </div>
        </div>
    )
}

export default Ranges