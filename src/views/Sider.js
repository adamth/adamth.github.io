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
                <RoundPicture imgSrc={me} width="210" height="210" />
                <SiderItem heading="MY BACKGROUND">
                    Experienced and result oriented web developer skilled in
                    system integration, database design and documentation.
                    Applied competence in all stages of the software development
                    life cycle including requirements gathering, infrastructure
                    setup, coding and testing. Gained proficiency with a number
                    of programming languages and developed in-depth knowledge of
                    latest technologies as a result of working on numerous
                    complex projects. Handles complex project management and
                    coordination work very efficiently to deliver results.
                    Looking forward to applying my diverse skill-set to a
                    challenging software development role
                </SiderItem>
                <SiderItem heading="TECHNICAL SKILLS">
                    <p>Frontend: React, Redux, Vue</p>
                    <p>Backend: Django, Express</p>
                    <p>Database: Postgres, MySQL </p>
                    <p>Languages: JavaScript, Python, Swift</p>
                </SiderItem>
                <SiderItem heading="PROFESSIONAL SKILLS">
                    <p>
                        Experienced working an an agile software development
                        environment.
                    </p>
                    <p>
                        Able to work effectively as part of a team or
                        independently.
                    </p>
                    <p>Strong communication skills.</p>
                    <p>
                        Equally comfortable communicating with technical and non
                        technical stakeholders.
                    </p>
                    <p>
                        Flexible - able to switch context and work across
                        multiple projects.
                    </p>
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
