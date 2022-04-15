import React from "react";
import Header from "../includes/Header"
import Contents from "../includes/Contents"
import Footer from "../includes/Footer"

function Script(){
    return (
        <>
            <Header />
            <Contents>
                <section className="script__cont">
                    <div className="script__inner">
                        <div>script 페이지입니다.</div>
                    </div>
                </section>
            </Contents>
            <Footer />
        </>    
    )
}

export default Script;