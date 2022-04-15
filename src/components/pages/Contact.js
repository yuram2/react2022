import React from "react";
import Header from "../includes/Header"
import Contents from "../includes/Contents"
import Footer from "../includes/Footer"

function Contact(){
    return (
        <>
            <Header />
            <Contents>
                <section className="contact__cont">
                    <div className="contact__inner">
                        <div>contact 페이지입니다.</div>
                    </div>
                </section>
            </Contents>
            <Footer />
        </>
    )
}

export default Contact;