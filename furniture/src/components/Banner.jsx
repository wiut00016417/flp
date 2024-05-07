import Ticket from "./Ticket"
import bg from "../assets/bg.jpg"

function Banner(){
    return (
        <div className="banner">
            <img src={bg} alt="Cozy environment" />
            <Ticket />
        </div>
        
    )
}

export default Banner