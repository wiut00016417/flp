import Header from '../components/Header'
import ShopHeader from '../components/ShopHeader'
import ShopFooter from '../components/ShopFooter'
import Footer from '../components/Footer'
import Ascart from '../components/As-cart'
import Osscart from '../components/Oss-cart'
import React, {useState} from 'react'

export default function Cart(){
    return (
        <div className="cart-page">
            <Header />
            <ShopHeader headtext={'Cart'} />
            <div className="cart-content">
                <div className="cart-titles">
                    
                </div>
            </div>
            <ShopFooter />
            <Footer />
        </div>
    )
}