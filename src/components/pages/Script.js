import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import Loading from "../basics/Loading";
import ScriptCont from "../includes/ScriptCont";
import axios from "axios";
import { gsap } from "gsap";

class Script extends React.Component {
    state =  {
        isLoading: true,
        lists: [],
        searchs: []
    }
    mainAnimation = () => {
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
            // gsap.to(".refer__inner", {
            //     duration: 0.5,
            //     y: 0,
            //     opacity: 1,
            //     delay: 1.6,
            //     ease: "power3.out"
            // });
        }, 10)
    }
    getScripts = async () => {
        const lists = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=marvel`);//api주소
        console.log(lists)
        this.setState({lists, isLoading: false});       
        this.mainAnimation();
    }
    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            this.getScripts();
        }, 2000);
    }
    render() {
        const { isLoading, lists } = this.state;
        return (
            <>
                {isLoading ? (
                    <Loading color="black" />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <Title title={["Script", "reference"]} />
                            <ScriptCont lists={lists}/>
                            <Contact />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}
export default Script;


















// import React from "react";
// import Header from "../layout/Header";
// import Contents from "../layout/Contents";
// import Footer from "../layout/Footer";
// import Title from "../layout/Title";
// import Contact from "../layout/Contact";
// import ScriptCont from "../includes/ScriptCont";

// function Script(){
//     return (
//         <>
//             <Header color="light" />
//             <Contents>
//                 <Title title={["Script","book"]} color="light" />
//                 <ScriptCont color="light" />
//                 <Contact />
//             </Contents>
//             <Footer color="light" />
//         </>
//     )
// }

// export default Script;