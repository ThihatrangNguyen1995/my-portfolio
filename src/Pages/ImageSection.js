import React from 'react'
import about from '../img/aboutme.jpg'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>
                    I am
                    <span> Carol Nguyen</span>
                </h4>
                <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate facere, numquam vitae place.
                    Dirm gfkkg kg kms gkr togms k?</p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>D.O.B</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Graduated</p>
                        <p>Major</p>
                    </div>
                    <div className="right-section">
                        <p>: Thi Ha Trang Nguyen</p>
                        <p>: Feb 20, 1995</p>
                        <p>: Vietnam</p>
                        <p>: English, Vietnamese</p>
                        <p>: Algonquin College </p>
                        <p>: Computer Programming</p>
                    </div>
                </div>
                <button className="btn">
                    Download CV
                </button>
            </div>
        </div>
    )
}

export default ImageSection
