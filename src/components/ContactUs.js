import React, { Component } from 'react'
import Contact from './Contact'
import NavSection from './NavSection'
import SlideImages from './SlideImages'
import Buttons from './Buttons'
import Footer from './Footer'
import Bottom from './Bottom'

export class ContactUs extends Component {
    render() {
        return (
            <>
                <NavSection/>
                <SlideImages/>
                                <Contact/>
                <Bottom/>
                <Footer/>
            </>
        )
    }
}

export default ContactUs
