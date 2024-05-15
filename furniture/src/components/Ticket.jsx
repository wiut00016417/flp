import Button from "./Button"

function Ticket(){
    return (
        <div className="ticket">
            <p>New Arrival</p>
            <h1>Discover Our New Collection</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In laboriosam officiis velit asperiores et earum.</p>
            <a href='checkout'><Button text='BUY NOW'/></a>
        </div>
    )
}

export default Ticket;