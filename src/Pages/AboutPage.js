import React from 'react'
import Tittle from "../components/Tittle";
import ImageSection from "../Pages/ImageSection";
import SkillsSection from "../components/SkillsSection";

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'}/>
            <ImageSection/>

            <Tittle title={'My Skills'} span={'My Skills'}/>
            <div className="skillsContainer">
                <SkillsSection skill={'HTML'} progress={'60%'} width={"60%"}/>
                <SkillsSection skill={'css'} progress={'60%'} width={"60%"}/>
                <SkillsSection skill={'Typescript'} progress={'60%'} width={"60%"}/>
                <SkillsSection skill={'Javascript'} progress={'60%'} width={"60%"}/>
                <SkillsSection skill={'React JS'} progress={'60%'} width={"60%"}/>
                <SkillsSection skill={'MongoDB'} progress={'60%'} width={"60%"}/>
                <SkillsSection skill={'Java'} progress={'60%'} width={"60%"}/>
                <SkillsSection skill={'Python'} progress={'60%'} width={"60%"}/>




            </div>
        </div>
    )
}

export default AboutPage;