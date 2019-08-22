import React, { Component } from "react";
import "./Content.scss";
import ContentItem from "../components/ContentItem";
import ProjectItem from "../components/ProjectItem";

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <h1>Adam Thompson</h1>
                <div className="sub-heading">
                    <p>Web Developer</p>
                </div>
                <div className="content-body">
                    <h3 className="red">WORK BACKGROUND</h3>
                    <ContentItem
                        heading="Web Developer"
                        subheading="Alliance Software | 2018 - Present"
                        tagline="Alliance Software is a world-class agile software development agency specialising in complex web apps."
                        pageBreak
                    >
                        <ProjectItem heading="Project Management">
                            <ul>
                                <li>Work as the sole developer on projects or as part of a larger development team</li>
                                <li>
                                    Communicate effectively with clients to establish project requirements and maintain
                                    excellent relationships
                                </li>
                                <li>Scope and estimate tasks as part of the agile project management process</li>
                            </ul>
                        </ProjectItem>
                        <ProjectItem heading="Development">
                            <ul>
                                <li>Conduct code reviews ensuring a high degree of quality is maintained</li>
                                <li>Manage source code using git</li>
                                <li>Work with Django to create complex, scalable web servers</li>
                                <li>
                                    Work with React and companion libraries to build modern, high performance user
                                    interfaces
                                </li>
                                <li>Deliver native iOS apps using Swift and XCode</li>
                            </ul>
                        </ProjectItem>
                        <ProjectItem heading="Design">
                            <ul>
                                <li>Logo and branding design for both internal and external clients</li>
                                <li>Work closely with the design team to deliver pixel perfect frontend products</li>
                                <li>Use libraries like p5.js to create bespoke interactive visual components</li>
                                <li>Design user interfaces as required with keen attention to detail</li>
                            </ul>
                        </ProjectItem>
                        <ProjectItem heading="Key Achievements">
                            <ul>
                                <li>
                                    Consistently achieve over 100% on all key performance targets, ensuring projects are
                                    delivered on time
                                </li>
                                <li>
                                    Deliver technical presentations to the company, sharing my unique experience and
                                    skill set with my peers and showing new opportunities that might not have otherwise
                                    been visible
                                </li>
                            </ul>
                        </ProjectItem>
                    </ContentItem>
                    <ContentItem
                        heading="Founder and Developer"
                        subheading="Autopilot Digital | 2017 - present"
                        tagline="Autopilot Digital is a small software development startup specialising in mobile apps"
                    >
                        <ProjectItem product="Logbookr">
                            Logbookr is a beautiful vehicle logbooking app for iOS built from the ground up to deliver a
                            reliable vehicle management process and streamlined user experience.
                            <ul>
                                <li>Designed product logo</li>
                                <li>Built reporting backend using firebase cloud functions</li>
                                <li>App built using Swift and XCode</li>
                            </ul>
                        </ProjectItem>
                    </ContentItem>
                    <ContentItem
                        heading="Systems Analyst"
                        subheading="Mind Australia | 2013 - 2018"
                        tagline="Mind Australia is one of the country's leading community-managed specialist mental health service providers."
                        pageBreak
                    >
                        <ProjectItem>
                            As the sole developer at Mind Australia I was responsible for the management, design and
                            delivery of a wide range of software projects.
                        </ProjectItem>
                        <ProjectItem>
                            <ul>
                                <li>
                                    Design and build a telecommunications asset register to manage over 700 mobile
                                    devices resulting in increased visibility into device usage and ultimately saving
                                    over $80k annually in mobile bills.
                                </li>
                                <li>
                                    Design and build a web app to allow clients to sign on a touch screen, reducing the
                                    need to paper forms and further streamlining the service delivery process.
                                </li>
                                <li>
                                    Design and build comprehensive reporting dashboards to be used by all levels of
                                    management, unlocking hidden value previously locked in the rich data sets of
                                    various business systems.
                                </li>
                                <li>
                                    Numerous other web app projects to help increase efficiency of business process and
                                    accuracy of government reporting, ensuring continued government funding and helping
                                    secure additional funding.
                                </li>
                            </ul>
                        </ProjectItem>
                        <ProjectItem heading="Key Achievements">
                            <ul>
                                <li>
                                    Invited to be on discussion panel at Qlik "Visualise your world" conference in 2015
                                    as a subject matter expert.
                                </li>
                                <li>
                                    Implemented git version control for all software projects (GitLab) enabling proper
                                    management of software projects and improved security of source code.
                                </li>
                                <li>
                                    Conducted QlikView training sessions for staff resulting a strong uptake of data
                                    reporting tools from all levels of management.
                                </li>
                            </ul>
                        </ProjectItem>
                    </ContentItem>
                    <ContentItem
                        heading="Senior Service Desk Analyst"
                        subheading="Wesley Mission Victoria | 2010 - 2013"
                        tagline="Wesley Mission cares for and supports disadvantaged and vulnerable Victorians through a range of community-based services."
                        hideRule
                    >
                        <ProjectItem>
                            <ul>
                                <li>Provided on site and phone support for remote clients.</li>
                                <li>
                                    Configure and troubleshoot network equipment ranging from Cisco routers and switches
                                    to consumer level ADSL modems.
                                </li>
                                <li>
                                    Work in a team on projects including:
                                    <ul>
                                        <li>
                                            Designing and implementing a VPN solution for over 40 residential units and
                                            other remote sites.
                                        </li>
                                        <li>
                                            Designing and implementing full directory structure update impacting over
                                            400 full time staff and hundreds of volunteers.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </ProjectItem>
                    </ContentItem>
                    <h3 className="red">EDUCATION</h3>
                    <ContentItem heading="Deakin University" subheading="Bachelor of Information Technology | 2015" hideRule>
                        <ProjectItem>
                            <ul>
                                <li>Graduated with a high distinction average</li>
                                <li>
                                    Selected to be part of the team representing Deakin in the Telstra IoT competition
                                </li>
                            </ul>
                        </ProjectItem>
                    </ContentItem>
                    <ContentItem
                        heading="Box Hill TAFE"
                        subheading="Advanced Diploma of Computer Systems Engineering | 2010"
                        hideRule
                    />
                    <h3 className="red">OTHER INTERESTS</h3>
                    <ContentItem>
                        <ProjectItem>
                            <p>I have numerous hobbies that I pursue outside of work</p>
                            <ul>
                                <li>
                                    Electronics - developing tools to help with my other projects such as a web enabled
                                    thermostat to help with baking
                                </li>
                                <li>
                                    Film Photography - I develop and scan my film at home and love learning how the
                                    process works
                                </li>
                                <li>
                                    Drones - I have built a number of racing and acrobatic drones and have recently been
                                    exploring the possibilities of autopilot and GPS navigation
                                </li>
                                <li>Various personal software projects at different stages of completion</li>
                            </ul>
                        </ProjectItem>
                    </ContentItem>
                </div>
            </div>
        );
    }
}
