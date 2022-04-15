import React from "react";
import Header from "../includes/Header"
import Contents from "../includes/Contents"
import Footer from "../includes/Footer"

function Reference(){
    return (
        <>
            <Header />
            <Contents>
                <section className="reference__cont">
                    <div className="reference__inner">
                        <div>reference 페이지입니다.</div>
                    </div>
                </section>
            </Contents>
            <Footer />
        </>    
    )
}

export default Reference;