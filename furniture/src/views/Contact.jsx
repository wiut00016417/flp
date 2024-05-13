import Header from "../components/Header"
import ShopHeader from "../components/ShopHeader"
import Footer from "../components/Footer"
import Button from "../components/Button"
import location from "../assets/contact/location.svg"
import phone from "../assets/contact/phone.svg"
import time from "../assets/contact/time.svg"
import ShopFooter from "../components/ShopFooter"

export default function Contact(){
    return (
        <div className="contact">
            <Header />
            <ShopHeader headtext={'Contact'}/>
            <div className="contact-info">
                <h1>
                    Get in touch with us
                </h1>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                <div className="contact-form">
                    <div className="contact-left">
                        <div className="contact-item">
                            <img src={location} alt="" />
                            <div className="contact-detail">
                                <h2>Address</h2>
                                <p>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <img src={phone} alt="" />
                            <div className="contact-detail">
                                <h2>Phone</h2>
                                <p>Mobile: +(84) 546-6789</p>
                                <p>Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <img src={time} alt="" />
                            <div className="contact-detail">
                                <h2>Working Time</h2>
                                <p>Monday-Friday: 9:00 - 22:00</p>
                                <p>Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-right">
                        <form action="login" className="login">
                            <div className="contact-input"><label htmlFor="">Your Name</label><input type="text" placeholder="Abs"/></div>
                            <div className="contact-input"><label htmlFor="">Email Address</label><input type="text" placeholder="Abc@def.com"/></div>
                            <div className="contact-input"><label htmlFor="">Subject</label><input type="text" placeholder="This is optional"/></div>
                            <div className="contact-input"><label htmlFor="">Message</label><textarea type="text" placeholder="Hi! I'd like to ask about"/></div>
                            <Button text={'SUBMIT'}/>
                        </form>
                    </div>
                </div>
            </div>
            <ShopFooter />
            <Footer />
        </div>
        
    )
}