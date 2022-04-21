import React from 'react';

// function ReferDetail(props) {
//     console.log(props)
//     return (
//         <div>ReferDetail</div>
//     )
// }

class ReferDetail extends React.Component {
    componentWillUnmount() {
        const {location, history} = this.props;
        if(location.state === undefined) {
            history.push("/reference");
        }
        this.mainAnimation();
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
            )},
    },10
}

    render() {
        const {location} = this.props;
        console.log(location.state);

        if(location.state === undefined);
        return (
            <>
                <Header />
                <Contents>
                <section className="refer__cont">
                <div className="container">
                    <div className="refer__inner">
                    <div className="refer__table">
                        <h3>{location.state.title}</h3>
                        <p>{location.state.desc}</p>
</div>
</div>
</div>
</section>
                </Contents>
                <Footer />
            </>
        )
    }
}
export default ReferDetail;