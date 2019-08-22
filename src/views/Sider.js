import React, { Component } from "react";
import RoundPicture from "../components/RoundPicture";
import SiderItem from "../components/SiderItem";

import me from "../img/me.jpg";
import iconChrome from "../img/icon-chrome.png";
import iconFigma from "../img/icon-figma.png";
import iconVSCode from "../img/icon-vs-code.png";
import iconGit from "../img/icon-git.png";

import "./Sider.scss";

export default class Sider extends Component {
    render() {
        return (
            <div className="sider">
                <RoundPicture imgSrc={me} />
                <SiderItem heading="MY BACKGROUND">
                    5+ years experienced and result oriented web developer with a knack for delivering elegant,
                    user-friendly software solutions effectively and efficiently. Applied competence in all stages of
                    the software development life cycle including requirements gathering, infrastructure setup, coding
                    and testing. Gained proficiency with a number of programming languages and developed in-depth
                    knowledge of latest technologies as a result of working on numerous complex projects. Handles
                    complex project management and coordination work very efficiently to deliver results. Looking
                    forward to applying my diverse skill-set to a challenging software development role
                </SiderItem>
                <SiderItem heading="TECHNICAL SKILLS">
                    <div>
                        <b>Web Technologies & Frameworks</b>
                        <ul>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Vue</li>
                        </ul>
                    </div>
                    <div>
                        <b>Web Servers</b>
                        <ul>
                            <li>Django</li>
                            <li>Express</li>
                        </ul>
                    </div>
                    <div>
                        <b>Databases</b>
                        <ul>
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                    <div>
                        <b>Languages</b>
                        <ul>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>Swift</li>
                        </ul>
                    </div>
                </SiderItem>
                <SiderItem heading="PROFESSIONAL SKILLS">
                    <p>Experienced working in an agile software development environment.</p>
                    <p>Able to work effectively as part of a team or independently.</p>
                    <p>Strong visual design skills with an eye for detail.</p>
                    <p>Equally comfortable communicating with technical and non technical stakeholders.</p>
                    <p>Flexible - able to switch context and work across multiple projects.</p>
                </SiderItem>
                <SiderItem heading="FAVORITE TOOLS">
                    <div className="icon-grid">
                        <img src={iconVSCode} alt="VS Code" />
                        <img src={iconFigma} alt="Figma" />
                        <img src={iconGit} alt="Git" />
                        <img src={iconChrome} alt="Chrome" />
                    </div>
                </SiderItem>
                <SiderItem heading="GET IN CONTACT">
                    <p className="link">
                        E: <a href="mailto:adam@adamth.com">adam@adamth.com</a>
                    </p>
                    <p className="link">
                        M: <a href="tel:0428804282">0428 804 282</a>
                    </p>
                </SiderItem>
            </div>
        );
    }
}
