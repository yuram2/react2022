import React from "react";
import { Link } from "react-router-dom";


function Footer(props){
    return(
        <footer id="footer" className={props.color}>
            <div>
                <h4>email</h4>
                <a href="mailto:lur0872@gmail.com">lur0872@gmail.com</a>
            </div>
            <div>
                <h4>kakao</h4>
                <a href="#">web</a>
            </div>
            <div>
                <h4>Social</h4>
                <ul>
                    <li><a href="/">Yutube</a></li>
                    <li><a href="/">Instargram</a></li>
                    <li><a href="/">Github</a></li>
                    <li><a href="/">Referecne</a></li>
                    <li><a href="/">Tutorials</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;