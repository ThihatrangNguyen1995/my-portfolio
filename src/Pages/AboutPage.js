import React from 'react'
import Tittle from "../components/Tittle";
import ImageSection from "../Pages/ImageSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import design from "../img/design.svg"
import intelligence from "../img/intelligence.svg"
import gamedv from "../img/game-dev.svg"

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'}/>
            <ImageSection/>
            <Tittle title={'My Skills'} span={'My Skills'}/>
            <div className="skillsContainer">
                <SkillsSection skill={'HTML'} progress={'60%'} width={"60%"}/>
                <SkillsSection skill={'css'} progress={'90%'} width={"90%"}/>
                <SkillsSection skill={'Typescript'} progress={'50%'} width={"50%"}/>
                <SkillsSection skill={'Javascript'} progress={'60%'} width={"60%"}/>
                <SkillsSection skill={'React JS'} progress={'80%'} width={"80%"}/>
                <SkillsSection skill={'MongoDB'} progress={'60%'} width={"60%"}/>
                <SkillsSection skill={'Java'} progress={'60%'} width={"60%"}/>
                <SkillsSection skill={'Python'} progress={'50%'} width={"50%"}/>
            </div>
            <Tittle title={'Services'} span={'Services'}/>
            <div className="services-container">
                <ServicesSection image={design} title={"Web Design"} text={'Lorem1 ipsum dolor sit amet consectetur adipisicing elit.'}/>
                <ServicesSection image={intelligence} title={"Artificial Intelligence"} text={'Lorem2 ipsum dolor sit amet consectetur adipisicing elit.'}/>
                <ServicesSection image={gamedv} title={"Game Development"} text={'Lorem3 ipsum dolor sit amet consectetur adipisicing elit.'}/>
            </div>
        </div>
    )
}

export default AboutPage;