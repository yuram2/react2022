import React from "react";

//함수형 컴퍼넌트 * 클래스 컴퍼넌트 --> 리엑트 훅

function MainInfo({text}) {
    return <div>{text}</div>
}
const mainText = [
    {text : "WE PROVIDE"},
    {text : "VISUAL CODING"},
    {text : "SOLUTIONS"},
    {text : "FOR YOU WEBS"},
]

function MainCont(){
    return (
        <section className="main__cont">
            <div className="main__inner">
                {mainText.map(txt => (
                    <MainInfo text={txt.text} key={txt.text} />
                ))}
            </div>
        </section>
    )
}
export default MainCont;