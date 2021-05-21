import React from 'react'
import Tittle from "../components/Tittle";
import ContactItem from "../components/ContactItem";
import phone from "../img/phone.svg"
import email from "../img/emailme.svg"
import location from "../img/location.svg"

function ContactPage() {
    return (
        <div>
            <div className='title'>
                <Tittle title={'Contact Me'} span={'Contact Me'}/>
            </div>
            <div className="ContactPage">
                <div className="map-section">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11202.787900809015!2d-75.7053525714717!3d45.41544982812436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050138c95589%3A0xeeca022a1d24ebfc!2sCoCo%20Fresh%20Tea%20%26%20Juice!5e0!3m2!1sen!2sca!4v1621621121838!5m2!1sen!2sca"
                        width="600" height="450" style={{border: 0}} frameBorder="0" allowFullScreen="" loading="lazy"/>
                </div>
                <div className="contact-section">
                    <ContactItem icon={phone}
                                 text1={'613-413-9520'}
                                 text2={'613-413-9520'}
                                 title ={'Phone'}/>
                    <ContactItem icon={email}
                                 text1={'caroline.nguyen20195@gmail.com'}
                                 text2={'avb@gmail.com'}
                                 title={'Email'}/>
                    <ContactItem icon={location}
                                 text1={'24 Uhnk fgiui, P2J K4N'}
                                 text2={'Canada'}
                                 title={'Address'}/>
                </div>

            </div>
        </div>

    )
}

export default ContactPage;
