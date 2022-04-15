import React from "react";
import Header from "../includes/Header"
import Contents from "../includes/Contents"
import Footer from "../includes/Footer"
import AboutCont from "../includes/AboutCont"
import ContTitle from "../includes/ContTitle"
import ContContact from "../includes/ContContact"

function About(){
    return (
        <>
            <Header color="light" />
            <Contents>
                <ContTitle title={["About","me"]} color="light" />
                <AboutCont color="light" />
                <ContContact />
            </Contents>
            <Footer color="light" />
        </>
    )
}

export default About;