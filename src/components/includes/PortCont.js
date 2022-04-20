import React from "react";

function PortInfo({id, link, title, image, category}) {
    return (
        <article className={id}>
            <figure className="img">
                <a href={link}><img src={image} alt={id} /></a>
            </figure>
            <div className="text">
                <h3>{title}</h3>
                <p>{category}</p>
            </div>
        </article>

    )
}

function PortCont(ports){
    return (
        <section className="port__cont">
            <div className="container">
                <div className="port__inner">
                        {ports.map(port =>(
                            <PortInfo
                            key={port.id}
                            link={port.link}
                            title={port.title}
                            image={port.image}
                            category={port.category}
                            />
                        ))}
                    {/* <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port01@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port02@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port03@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port01@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port02@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port03@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port01@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port02@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article>
                    <article className="port__item">
                        <figure className="img">
                            <a href="/"><img src="img/port03@2x.jpg" alt="port01" /></a>
                        </figure>
                        <div className="text">
                            <h3>Portfolio Title</h3>
                            <p>Portfolio</p>
                        </div>
                    </article> */}
                </div>
            </div>
        </section>
    )
}

export default PortCont;