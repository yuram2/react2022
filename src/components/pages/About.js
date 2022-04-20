import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
// import Footer from "../layout/Footer";
import AboutCont from "../includes/AboutCont";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function About(){
//     return (
//         <>
//             <Header color="light" />
//             <Contents>
//                 <Title title={["About","me"]} color="light" />
//                 <AboutCont color="light" />
//                 <Contact />
//             </Contents>
//             <Footer color="light" />
//         </>
//     )
// }

// export default About;

// class loding 
class About extends React.Component {
    state = { //함수
        isLoading: true,
    }

    aboutAnimation = () => {
        setTimeout(() => { 
            gsap.to("#header", {
                duration: 0.8, 
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.8, 
                bottom: 0,
                delay: 0.2,
            });
            gsap.to(".cont__title strong", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "power4.out"
            });
            gsap.to(".cont__title em", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.3,
                ease: "power4.out"
            });
            gsap.to(".about__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.6,
                ease: "power3.out"
            });
        }, 10)
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading:false});

            this.aboutAnimation();
        }, 3000);
    } 


    render(){
        const {isLoading} = this.state; //변수 설정

        return(
            <>
                {isLoading ? ( //true
                    <Loading />  //false
                ) : (
                    <>
                        <Header color="light" />
                        <Contents>
                            <Title title={["About","me"]} color="light" />
                            <AboutCont color="light" />
                            <Contact />
                        </Contents>
                        {/* <Footer /> */}
                    </>
                )}
            </>
        )
    }

}

export default About;